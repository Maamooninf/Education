import { Question } from "../../../components/proglang/ProLangInterface";

export interface QuestionActionPending {
  type: "REQUEST_CREATE_QUESTION";
}

export interface QuestionActionSuccess {
  type: "SUCCESS_CREATE_QUESTION";
  payload: Question;
}

export interface QuestionActionFail {
  type: "FAILED_CREATE_QUESTION";
  payload: any;
}

export type ActionQues =
  | QuestionActionPending
  | QuestionActionSuccess
  | QuestionActionFail;
