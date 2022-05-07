import { Conversation } from "../../../reducer/contactreducer/conversation/converRinter";

interface actionPendingConversation {
  type:
    | "REQUEST_GET_CONVERSATIONS"
    | "REQUEST_CREATE_CONVERSATION"
    | "REQUEST_ADD_USER_CONVERSATION"
    | "SUCCESS_ADD_USER_CONVERSATION";
}
interface SetCurrentChat {
  type: "SET_CURRENT_CHAT";
  payload: Conversation | undefined;
}
interface actionSuccessGetConversation {
  type: "SUCCESS_GET_CONVERSATIONS";
  payload: Conversation[];
}
interface actionSuccessAddConversation {
  type: "SUCCESS_ADD_CONVERSATION";
  payload: Conversation;
}
interface actionSuccessRemoveConversation {
  type: "SUCCESS_REMOVE_CONVERSATION";
  payload: string;
}
interface actionFailConversation {
  type:
    | "FAILED_GET_CONVERSATIONS"
    | "FAILED_CREATE_CONVERSATION"
    | "FAILED_ADD_USER_CONVERSATION";

  payload: any;
}
interface actionSuccessUpdateConversationOreder {
  type: "UPDATE_CONVERSATION_OREDER";
  payload: { convId: string; lastmessage: string };
}
export type ActionConversation =
  | actionPendingConversation
  | actionSuccessGetConversation
  | actionSuccessAddConversation
  | actionFailConversation
  | actionSuccessUpdateConversationOreder
  | actionSuccessRemoveConversation
  | SetCurrentChat;
