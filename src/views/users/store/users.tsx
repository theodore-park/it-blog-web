import { UserAction } from "./actions";

type User = {
  id: number
  name: string
}

const initialState: User = {
  id: 0,
  name: ""
};

export default {
  user: (state: User = initialState, action: UserAction) => {
    return {
      id: 1,
      name: "theodore.park"
    }
  }
}