import { ActionTypes } from "../constant/action-type";

export const setCoins = (coins) => {
  return {
    type: ActionTypes.SET_IDRCOINS,
    payload: coins,
  };
};

