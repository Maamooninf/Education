import { Conversation } from "../../../reducer/contactr/conversation/converRinter";

export interface actionPendingConversation {
  type: "REQUEST_GET_CONVERSATION" | "REQUEST_CREATE_CONVERSATION";
}
export interface actionSuccessConversation {
  type: "SUCCESS_GET_CONVERSATION" | "SUCCESS_CREATE_CONVERSATION";
  payload: any;
}

export interface actionFailConversation {
  type: "FAILED_GET_CONVERSATION" | "FAILED_CREATE_CONVERSATION";

  payload: any;
}
export type ActionConversation =
  | actionPendingConversation
  | actionSuccessConversation
  | actionFailConversation;
