import { Option, Question } from "../../reducer/questionreducer/questionRinter";

interface QuestionActionPending {
  type:
    | "REQUEST_CREATE_QUESTION"
    | "REQUEST_GET_QUESTIONS"
    | "REQUEST_GET_OPTIONS";
}

interface QuestionActionSuccess {
  type: "SUCCESS_CREATE_QUESTION" | "SUCCESS_GET_OPTIONS";
  payload: Question;
}

interface QuestionSuccessGet {
  type: "SUCCESS_GET_QUESTIONS";
  payload: Question[];
}

interface QuestionActionFail {
  type:
    | "FAILED_CREATE_QUESTION"
    | "FAILED_GET_QUESTIONS"
    | "FAILED_GET_OPTIONS";
  payload: any;
}

export type ActionQues =
  | QuestionActionPending
  | QuestionActionSuccess
  | QuestionSuccessGet
  | QuestionActionFail;
