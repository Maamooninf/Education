export interface Lang {
  _id: string;
  lang: string;
  description: string;
}
export interface LangState {
  langload: boolean;
  langDa: Lang[];
  langerr: any;
}
