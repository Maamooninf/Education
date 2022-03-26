import { ActionLecture } from "../../action/lectureaction/lectureAInter";
import { LectureState } from "./lectureRinter";

export const lecTure = (
  state: LectureState = {
    lecload: false,
    lecDa: [],
    lecerr: {},
  },
  action: ActionLecture
) => {
  switch (action.type) {
    case "REQUEST_CREATE_LECTURE":
      return { ...state, lecload: true };

    case "SUCCESS_CREATE_LECTURE":
      return {
        ...state,
        lecload: false,
        lecDa: [...state.lecDa, action.payload],
        lecerr: {},
      };

    case "FAILED_CREATE_LECTURE":
      return { ...state, lecload: false, lecerr: action.payload };
    default: {
      return state;
    }
  }
};
