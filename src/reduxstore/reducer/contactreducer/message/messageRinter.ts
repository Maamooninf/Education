export interface MessageCreate {
  _id: string;
  content: string;
  author: string;
  conversation: string;
}
interface MessageAuthor {
  name: string;
  _id: string;
  id: string;
}
export interface Message {
  _id: string;
  content: string;
  author: MessageAuthor;
  conversation: string;
  createdAt: string;
  date: string;
}
export interface MessageState {
  messload: boolean;
  messDa: Message[];
  pageSize: number;
  messerr: any;
  pageNumber: number;
  hasMore: boolean;
}
