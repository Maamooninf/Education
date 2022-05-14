export interface LastMessag {
  content: string;
  createdAt?: Date;
}

export interface Conversation {
  _id: string;
  title: string;
  picture?: string;
  members: Array<string>;
  language: string;
  lastmessage?: LastMessag;
  isjoined?: number;
}

export interface ConverState {
  convload: boolean;
  convDa: Conversation[];
  getnew: number;
  currentChat?: Conversation;
  converr: any;
}
