import usersReducers from "./usersReducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  users: usersReducers
});

export default rootReducers;
