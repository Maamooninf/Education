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

    case "SUCCESS_CREATE_QUESTION":
      return {
        ...state,
        quesload: false,
        questionsDa: [...state.questionsDa, action.payload],
        queserr: {},
      };

    case "FAILED_CREATE_QUESTION":
      return { ...state, quesload: false, queserr: action.payload };
    default: {
      return state;
    }
  }
};
