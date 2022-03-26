import { ActionUser } from "../../action/useraction/actionInterface";
import { State } from "./userRinter";
export const userRigister = (
  state: State = { loadup: false, message: "", errorup: {} },
  action: ActionUser
) => {
  switch (action.type) {
    case "REQUEST_RIGISTER":
      return { ...state, loadup: true };
    case "SUCCESS_RIGISTER":
      return { ...state, loadup: false, message: action.payload, errorup: {} };
    case "FAILED_RIGISTER":
      return { ...state, loadup: false, errorup: action.payload };
    default: {
      return state;
    }
  }
};
