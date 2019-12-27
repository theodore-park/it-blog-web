import Types from "./types";

const getUsers = () => ({ type: Types.GET_USERS });

export type UserAction =
  | ReturnType<typeof getUsers>

export default {
  getUsers
}