import { combineReducers } from "redux";
import UserReducer from "../../views/users/store"

const RootReducer = combineReducers(UserReducer);

export default RootReducer;