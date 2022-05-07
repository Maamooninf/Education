import { Role } from "../../reducer/rolereducer/roleRinter";

interface RoleActionPending {
  type: "REQUEST_GET_ROLE";
}

interface RoleActionSuccess {
  type: "SUCCESS_GET_ROLE";
  payload: Role[];
}

interface RoleActionFail {
  type: "FAILED_GET_ROLE";
  payload: any;
}

export type ActionRole = RoleActionPending | RoleActionSuccess | RoleActionFail;
