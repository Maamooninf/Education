export interface Slide {
  _id?: string;
  content: string;
  kind: string;
}
export interface Lecture {
  _id?: string;
  slides: Slide[];
  language?: string;
  title: string;
}
export interface LectureState {
  lecload: boolean;
  lecDa: Lecture[];
  slidDa: Lecture[];
  lecerr: any;
}
