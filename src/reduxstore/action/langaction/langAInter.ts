import { Lang } from "../../reducer/langreducer/langRinter";

export interface LanguageActionPending {
  type: "REQUEST_CREATE_LANGUAGE" | "REQUEST_GET_LANGUAGE";
}

export interface LanguageActionSuccess {
  type: "SUCCESS_GET_LANGUAGE";
  payload: Lang[];
}

export interface LanguageActionFail {
  type: "FAILED_CREATE_LANGUAGE" | "FAILED_GET_LANGUAGE";
  payload: any;
}

export type ActionLanguage =
  | LanguageActionPending
  | LanguageActionSuccess
  | LanguageActionFail;
