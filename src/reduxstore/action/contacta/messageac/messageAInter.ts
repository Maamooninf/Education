import { Message } from "../../../reducer/contactreducer/message/messageRinter";

interface actionPendingMessage {
  type:
    | "REQUEST_GET_MESSAGES"
    | "REQUEST_CREATE_MESSAGE"
    | "REQUEST_APPEND_MESSAGES"
    | "CLEAR_VARS_MESSAGE"
    | "CLEAR_MESSAGE_ARRAY";
}
interface actionSuccessMessage {
  type: "SUCCESS_CREATE_MESSAGE";
  payload: Message;
}
interface actionSuccessGetMessage {
  type: "SUCCESS_GET_MESSAGES";
  payload: Message[];
}

interface actionFailMessage {
  type: "FAILED_CREATE_MESSAGE" | "FAILED_GET_MESSAGES";

  payload: any;
}
export type ActionMessage =
  | actionPendingMessage
  | actionSuccessMessage
  | actionSuccessGetMessage
  | actionFailMessage;
