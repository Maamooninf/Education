import { Lecture } from "../../reducer/lecturereducer/lectureRinter";

export interface QuestionActionPending {
  type: "REQUEST_CREATE_LECTURE";
}

export interface QuestionActionSuccess {
  type: "SUCCESS_CREATE_LECTURE";
  payload: Lecture;
}

export interface QuestionActionFail {
  type: "FAILED_CREATE_LECTURE";
  payload: any;
}

export type ActionLecture =
  | QuestionActionPending
  | QuestionActionSuccess
  | QuestionActionFail;
