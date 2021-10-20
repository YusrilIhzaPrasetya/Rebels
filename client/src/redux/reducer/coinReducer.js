import { ActionTypes } from "../constant/action-type";

const initialState = {
  coins: [],
};

export const coinReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_IDRCOINS:
      return { ...state, coins: payload };
    default:
      return state;
  }
};
