// import { Lang } from "../langreducer/langRinter";

export interface User {
  name?: string;
  email?: string;
  password?: string;
  confirmpassword?: string;
  accesstoken?: string;
  refreshtoken?: string;
  roles?: Array<string>;
  isUser?: boolean;
  isAdmin?: boolean;
  isEmploye?: boolean;
}
export interface UserOrig {
  name: string;
  email: string;
  password?: string;
  confirmpassword?: string;
  roles: Array<string>;
  languages: Array<string>;
}
export interface State {
  message?: any;
  userInfo?: User;
  loadin?: boolean;
  loadup?: boolean;
  errorin?: any;
  errorup?: any;
}

export interface UserDashInter {
  _id: number;
  total: number;
}
export interface UserForSerach {
  _id: string;
  email: string;
  name: string;
  Isonline?: boolean;
}
export interface UserSearch {
  totalCount: [{ total: number }];
  users: UserForSerach[];
}

export interface UserDashState {
  userload: boolean;
  usererror: any;
  totalusers: Array<any>;
  users: UserForSerach[];
  totalUsers: number;
}
