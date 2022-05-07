import { ActionConversation } from "../../../action/contacta/conversation/convAInter";
import { Conversation, ConverState } from "./converRinter";
export const ConVersation = (
  state: ConverState = {
    convload: false,
    getnew: -1,
    convDa: [],
    currentChat: undefined,
    converr: {},
  },
  action: ActionConversation
) => {
  switch (action.type) {
    case "SET_CURRENT_CHAT":
      return { ...state, currentChat: action.payload };

    case "REQUEST_GET_CONVERSATIONS":
      return { ...state, convload: true, convDa: [], getnew: -1 };

    case "REQUEST_CREATE_CONVERSATION":
      return { ...state, convload: true };
    case "REQUEST_ADD_USER_CONVERSATION":
      return { ...state, convload: true };
    case "SUCCESS_ADD_USER_CONVERSATION":
      return { ...state, convload: false };
    case "SUCCESS_GET_CONVERSATIONS":
      return { ...state, convload: false, convDa: action.payload, getnew: 1 };
    case "UPDATE_CONVERSATION_OREDER":
      let newCon: Conversation[] = [];
      state.convDa.forEach((con) => {
        if (con._id === action.payload.convId) {
          con.lastmessage = action.payload.lastmessage;
          newCon.unshift(con);
        } else newCon.push(con);
      });
      return { ...state, convload: false, convDa: newCon, getnew: -1 };
    case "SUCCESS_ADD_CONVERSATION":
      let conv = state.convDa;
      conv.unshift(action.payload);
      return {
        ...state,
        convload: false,
        convDa: conv,
      };
    case "SUCCESS_REMOVE_CONVERSATION":
      let newcon: Conversation[] = [];
      state.convDa.forEach((co) => {
        if (co._id !== action.payload) newcon.push(co);
      });
      return {
        ...state,
        convload: false,
        convDa: newcon,
      };
    case "FAILED_GET_CONVERSATIONS":
      return {
        ...state,
        convload: false,
        converr: action.payload,
      };

    case "FAILED_CREATE_CONVERSATION":
      return {
        ...state,
        convload: false,
        converr: action.payload,
      };
    case "FAILED_ADD_USER_CONVERSATION":
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
