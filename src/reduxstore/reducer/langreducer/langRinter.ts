import { UserOrig } from "../usereducer/userRinter";

export interface Lang {
  _id: string;
  lang: string;
  description: string;
  supervisors: UserOrig[] | Array<string>;
}

export interface LangState {
  langload: boolean;
  langDa: Lang[];
  langerr: any;
}
