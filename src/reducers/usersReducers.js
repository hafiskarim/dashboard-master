import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userData: []
};
const usersReducers = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.GET_USER_COMPLETE:
      return {
        ...state,
        userData: action.payload.data
      };
    default:
      return state;

    case actionTypes.ADD_USER_COMPLETE:
      return {
        ...newState
      };
    case actionTypes.DELETE_USER_START:
      return {
        ...newState
      };

    // case actionTypes.DELETE_USER_COMPLETE:
    //   return state.filter(item => item.id !== action.payload.id);
    // return {
    //   ...newState,
    //   userData: newState.userData.filter(
    //     item => item.id !== action.payload.id
    //   )
    // };

    case actionTypes.DELETE_USER_ERROR:
      return {
        ...newState
      };
  }
};

export default usersReducers;
