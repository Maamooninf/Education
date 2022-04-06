import { Lecture, Slide } from "../../reducer/lecturereducer/lectureRinter";

interface LectureActionPending {
  type:
    | "REQUEST_CREATE_LECTURE"
    | "REQUEST_GET_LECTURES"
    | "REQUEST_GET_SLIDES";
}

interface LectureActionSuccess {
  type:
    | "SUCCESS_CREATE_LECTURE"
    | "SUCCESS_GET_LECTURES"
    | "SUCCESS_GET_SLIDES";
  payload: Lecture[];
}

interface LectureActionFail {
  type: "FAILED_CREATE_LECTURE" | "FAILED_GET_LECTURES" | "FAILED_GET_SLIDES";
  payload: any;
}

export type ActionLecture =
  | LectureActionPending
  | LectureActionSuccess
  | LectureActionFail;
