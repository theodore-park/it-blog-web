import { combineReducers } from "redux";
import users from "../../views/user/users/store"

const rootReducer = combineReducers(users);

export default rootReducer;