import { Account, UserDashInter } from "../../reducer/usereducer/userRinter";

interface ActionPendingUser {
  type: "REQUEST_SIGN" | "REQUEST_RIGISTER" | "REQUEST_GET_USERS";
}

interface ActionSuccessUser {
  type: "SUCCESS_SIGN" | "SUCCESS_RIGISTER" | "SUCCESS_SIGNOUT";

  payload?: any;
}

interface UserActionSuccess {
  type: "SUCCESS_GET_USERS";
  payload: Array<any>;
}

interface ActionFailUser {
  type: "FAILED_SIGN" | "FAILED_RIGISTER" | "FAILED_GET_USERS";
  payload: any;
}

interface ActionSuccessAccount {
  type: "SUCCESS_GET_TEACHERS";
  payload: Account[];
}

export type ActionUser =
  | ActionPendingUser
  | ActionSuccessUser
  | ActionFailUser
  | UserActionSuccess
  | ActionSuccessAccount;
