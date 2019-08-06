import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import reduxPromise from "redux-promise";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const logger = store => next => action => {
  console.log("[Middleware] Dispatching", action);
  const result = next(action);
  console.log("[Middleware] next state", store.getState());
  return result;
};
const enhancher = composeEnhancers(
  applyMiddleware(
    logger,
    thunk,
    reduxPromise,
    reduxImmutableStateInvariant({
      ignore: [
        "productsPrice.productsPriceData",
        "productsPrice.selectedProducts",
        "productsPrice.productPicked",
        "purchaseOrder.productsPriceData",
        "purchaseOrder.selectedProducts",
        "purchaseOrder.productPicked",
        "purchaseReturn.selectedRowData"
      ]
    })
  )
);
export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancher);
}
