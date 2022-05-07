import { ActionRole } from "../../action/roleaction/roleAInter";
import { RoleState } from "./roleRinter";

export const roLe = (
  state: RoleState = {
    roleload: false,
    roleDa: [],
    roleerr: {},
  },
  action: ActionRole
) => {
  switch (action.type) {
    //

    case "REQUEST_GET_ROLE":
      return { ...state, roleload: true };
    case "SUCCESS_GET_ROLE":
      return { ...state, roleload: false, roleDa: action.payload };
    case "FAILED_GET_ROLE":
      return { ...state, roleload: false, roleerr: action.payload };

    default: {
      return state;
    }
  }
};
