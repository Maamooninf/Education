interface Slide {
  _id?: string;
  content: string;
  kind: number;
}
export interface Lecture {
  _id?: string;
  slides: Slide[];
  language?: string;
}
export interface LectureState {
  lecload: boolean;
  lecDa: Lecture[];
  lecerr: any;
}
