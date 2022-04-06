import { ActionUser } from "../../action/useraction/actionInterface";
import { State } from "./userRinter";

export const userSign = (
  state: State = {
    loadin: false,
    userInfo: {},
    errorin: {},
  },
  action: ActionUser
) => {
  switch (action.type) {
    case "REQUEST_SIGN":
      return { ...state, loadin: true };
    case "SUCCESS_SIGN":
      return {
        ...state,
        loadin: false,
        userInfo: action.payload,
        errorin: {},
      };
    case "SUCCESS_SIGNOUT":
      return { ...state, loadin: false, userInfo: {} };

    case "FAILED_SIGN":
      return { ...state, loadin: false, errorin: action.payload };

    default: {
      return state;
    }
  }
};
