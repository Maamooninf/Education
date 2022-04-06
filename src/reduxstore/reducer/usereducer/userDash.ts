import { ActionUser } from "../../action/useraction/actionInterface";
import { UserDashState } from "./userRinter";

export const userDash = (
  state: UserDashState = {
    userload: false,
    totalusers: [],
    employees: [],
    usererror: {},
  },
  action: ActionUser
) => {
  switch (action.type) {
    case "REQUEST_GET_USERS":
      return { ...state, userload: true };
    case "SUCCESS_GET_USERS":
      return {
        ...state,
        userload: false,
        totalusers: action.payload,
        usererror: {},
      };
    case "SUCCESS_GET_TEACHERS":
      return {
        ...state,
        userload: false,
        employees: action.payload,
        usererror: {},
      };
    case "FAILED_GET_USERS":
      return { ...state, userload: false, usererror: action.payload };

    default: {
      return state;
    }
  }
};
