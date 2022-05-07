import { UserForSerach, UserSearch } from "../../reducer/usereducer/userRinter";

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

interface UserActionGet {
  type: "SUCCESS_GET_USERS_ALL";
  payload: UserSearch;
}
interface UserActionSuccessWithConversation {
  type: "SUCCESS_GET_USERS_CONVERSATION";
  payload: UserForSerach[];
}
interface ActionUpdateUsersConver {
  type: "UPDATE_USERS_CONVERSATION" | "ADD_USER_CONVERSATION_N";
  payload: UserForSerach;
}
interface ActionRemoveUserConver {
  type: "DELETE_USER_CONVERSATION";
  payload: string;
}
interface ActionFailUser {
  type: "FAILED_SIGN" | "FAILED_RIGISTER" | "FAILED_GET_USERS";
  payload: any;
}

export type ActionUser =
  | ActionPendingUser
  | ActionSuccessUser
  | ActionFailUser
  | UserActionSuccess
  | UserActionGet
  | UserActionSuccessWithConversation
  | ActionUpdateUsersConver
  | ActionRemoveUserConver;
