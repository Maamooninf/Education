export interface Conversation {
  title: string;
  picture?: string;
  members: Array<string>;
  supervisor: Array<string>;
  language: string;
}

export interface ConverState {
  convload: boolean;
  convDa: Conversation[];
  converr: any;
}
