import { ActionMessage } from "../../../action/contacta/messageac/messageAInter";
import { MessageState } from "./messageRinter";
export const MessAge = (
  state: MessageState = {
    messload: false,
    pageNumber: 1,
    hasMore: false,
    messDa: [],
    messerr: {},
  },
  action: ActionMessage
) => {
  switch (action.type) {
    case "REQUEST_GET_MESSAGES":
      return { ...state, messload: true, messDa: [] };
    case "REQUEST_APPEND_MESSAGES":
      return { ...state, messload: true };

    case "REQUEST_CREATE_MESSAGE":
      return { ...state, messload: true };

    case "SUCCESS_GET_MESSAGES":
      if (state.pageNumber === 1) {
        return {
          ...state,
          messload: false,
          messDa: action.payload,
          pageNumber: state.pageNumber + 1,
          hasMore: action.payload.length === 10,
          messerr: {},
        };
      } else {
        if (action.payload.length > 0) {
          return {
            ...state,
            messload: false,
            messDa: [...action.payload, ...state.messDa],
            pageNumber: state.pageNumber + 1,
            hasMore: action.payload.length === 10,
            messerr: {},
          };
        } else {
          return {
            ...state,
            messload: false,
            hasMore: false,
            messerr: {},
          };
        }
      }

    case "CLEAR_VARS_MESSAGE":
      return {
        ...state,
        messload: false,
        pageNumber: 1,
        hasMore: false,
      };

    case "SUCCESS_CREATE_MESSAGE":
      return {
        ...state,
        messload: false,
        messDa: [...state.messDa, action.payload],
        messerr: {},
      };

    case "FAILED_GET_MESSAGES":
      return {
        ...state,
        messload: false,
        messerr: action.payload,
      };
    case "FAILED_CREATE_MESSAGE":
      return {
        ...state,
        messload: false,
        messerr: action.payload,
      };

    default: {
      return state;
    }
  }
};
