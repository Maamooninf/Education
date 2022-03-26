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
