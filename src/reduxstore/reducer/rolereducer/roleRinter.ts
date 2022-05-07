export interface Role {
  prival: string;
  _id: string;
}

export interface RoleState {
  roleload: boolean;
  roleDa: Role[];
  roleerr: any;
}
