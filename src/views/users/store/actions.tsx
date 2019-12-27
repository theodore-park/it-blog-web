import Types from "./types";

const getUser = () => ({ type: Types.GET_USERS });

export type UserAction =
  | ReturnType<typeof getUser>

export default {
  getUser
}