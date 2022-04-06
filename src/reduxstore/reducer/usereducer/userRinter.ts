export interface User {
  name?: string;
  email?: string;
  password?: string;
  confirmpassword?: string;
  accesstoken?: string;
  refreshtoken?: string;
  isUser?: boolean;
  isAdmin?: boolean;
  isEmploye?: boolean;
}

export interface State {
  message?: string;
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
export interface Account {
  supername: string;
  profilePic?: string;
  email: string;
  expertise: Array<string>;
}

export interface UserDashState {
  userload: boolean;
  usererror: any;
  totalusers: Array<any>;
  employees: Array<Account>;
}
