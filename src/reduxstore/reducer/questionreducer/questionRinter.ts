export interface Option {
  _id?: string;
  description: string;
  isTrue: boolean;
  index?: number;
}
export interface Question {
  _id?: string;
  description: string;
  options: Option[];
  language?: string;
}

export interface QuestionState {
  quesload: boolean;
  questionsDa: Question[];
  queserr: any;
}
