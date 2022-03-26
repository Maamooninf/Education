import { Question } from "../../../components/proglang/ProLangInterface";

export interface QuestionState {
  quesload: boolean;
  questionsDa: Question[];
  queserr: any;
}
