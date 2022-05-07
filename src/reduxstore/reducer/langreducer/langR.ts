import { ActionLanguage } from "../../action/langaction/langAInter";
import { LangState } from "./langRinter";
export const lanGuage = (
  state: LangState = {
    langload: false,
    langDa: [],
    langerr: {},
  },
  action: ActionLanguage
) => {
  switch (action.type) {
    // case "REQUEST_CREATE_LANGUAGE":
    //   return { ...state, langload: true };

    // case "SUCCESS_CREATE_LANGUAGE":
    //   return {
    //     ...state,
    //     langload: false,
    //     langDa: [...state.langDa, action.payload],
    //     langerr: {},
    //   };

    // case "FAILED_CREATE_LANGUAGE":
    //   return { ...state, langload: false, langerr: action.payload };

    case "REQUEST_GET_LANGUAGE":
      return { ...state, langload: true };

    case "SUCCESS_GET_LANGUAGE":
      return {
        ...state,
        langload: false,
        langDa: action.payload,
        langerr: {},
      };

    case "FAILED_GET_LANGUAGE":
      return { ...state, langload: false, langerr: action.payload };

    default: {
      return state;
    }
  }
};
