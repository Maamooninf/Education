import { ActionQues } from "../../action/questionaction/questionAInter";
import { QuestionState } from "./questionRinter";

export const quesTion = (
  state: QuestionState = {
    quesload: false,
    questionsDa: [],
    queserr: {},
  },
  action: ActionQues
) => {
  switch (action.type) {
    case "REQUEST_CREATE_QUESTION":
      return { ...state, quesload: true };
    case "REQUEST_GET_QUESTIONS":
      return { ...state, quesload: true, optionDa: [] };
    case "REQUEST_GET_OPTIONS":
      return { ...state, quesload: true };

    case "SUCCESS_CREATE_QUESTION":
      return {
        ...state,
        quesload: false,
        questionsDa: [...state.questionsDa, action.payload],
        queserr: {},
      };
    case "SUCCESS_GET_QUESTIONS":
      return {
        ...state,
        quesload: false,
        questionsDa: action.payload,
        queserr: {},
      };
    case "SUCCESS_GET_OPTIONS":
      let ques = [...state.questionsDa];
      ques.map((q) =>
        q._id === action.payload._id ? (q.options = action.payload.options) : q
      );
      return {
        ...state,
        quesload: false,
        questionsDa: ques,
        queserr: {},
      };
    case "FAILED_CREATE_QUESTION":
      return { ...state, quesload: false, queserr: action.payload };
    case "FAILED_GET_OPTIONS":
      return { ...state, quesload: false, queserr: action.payload };
    default: {
      return state;
    }
  }
};
