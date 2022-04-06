import { ActionConversation } from "../../../action/contacta/conversation/convAInter";
import { ConverState } from "./converRinter";
export const ConVersation = (
  state: ConverState = {
    convload: false,
    convDa: [],
    converr: {},
  },
  action: ActionConversation
) => {
  switch (action.type) {
    case "REQUEST_CREATE_CONVERSATION":
      return { ...state, convload: true };

    case "SUCCESS_CREATE_CONVERSATION":
      return {
        ...state,
        convload: false,
        converr: {},
      };
    case "FAILED_CREATE_CONVERSATION":
      return {
        ...state,
        convload: false,
        converr: action.payload,
      };

    default: {
      return state;
    }
  }
};
