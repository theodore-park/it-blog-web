import { combineReducers } from 'redux';
import Users from './users';

const UserReducer = combineReducers(
  Users
);

export default UserReducer;