export interface Option {
  description: string;
  isTrue: boolean;
  index?: number;
}
export interface Question {
  description: string;
  options: Option[];
  language?: string;
}
