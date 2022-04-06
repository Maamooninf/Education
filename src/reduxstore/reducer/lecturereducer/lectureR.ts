import { ActionLecture } from "../../action/lectureaction/lectureAInter";
import { LectureState } from "./lectureRinter";

export const lecTure = (
  state: LectureState = {
    lecload: false,
    lecDa: [],
    lecerr: {},
    slidDa: [],
  },
  action: ActionLecture
) => {
  switch (action.type) {
    //

    case "REQUEST_GET_LECTURES":
      return { ...state, lecload: true };
    case "SUCCESS_GET_LECTURES":
      return { ...state, lecload: false, lecDa: action.payload };
    case "FAILED_GET_LECTURES":
      return { ...state, lecload: false, lecerr: action.payload };

    //
    case "REQUEST_GET_SLIDES":
      return { ...state, lecload: true };
    case "SUCCESS_GET_SLIDES":
      return { ...state, lecload: false, slidDa: action.payload };
    case "FAILED_GET_SLIDES":
      return { ...state, lecload: false, lecerr: action.payload };

    //

    case "REQUEST_CREATE_LECTURE":
      return { ...state, lecload: true };
    case "SUCCESS_CREATE_LECTURE":
      return {
        ...state,
        lecload: false,
        lecDa: [...state.lecDa, action.payload[0]],
        lecerr: {},
      };
    case "FAILED_CREATE_LECTURE":
      return { ...state, lecload: false, lecerr: action.payload };

    //
    default: {
      return state;
    }
  }
};
