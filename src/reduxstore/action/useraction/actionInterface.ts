export interface ActionPending {
  type: "REQUEST_SIGN" | "REQUEST_RIGISTER";
}

export interface ActionSuccess {
  type: "SUCCESS_SIGN" | "SUCCESS_RIGISTER" | "SUCCESS_SIGNOUT";
  payload?: any;
}

export interface ActionFail {
  type: "FAILED_SIGN" | "FAILED_RIGISTER";
  payload: any;
}

export type ActionUser = ActionPending | ActionSuccess | ActionFail;
