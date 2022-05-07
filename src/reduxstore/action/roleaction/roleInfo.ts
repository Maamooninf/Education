import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../../store";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ActionRole } from "./roleAInter";
import { Role } from "../../reducer/rolereducer/roleRinter";
export const GetRoles = () => {
  return async (dispatch: Dispatch<ActionRole>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_ROLE" });
      const { data } = await axios.get<Role[]>(
        "http://localhost:4010/role/rols",

        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );

      dispatch({ type: "SUCCESS_GET_ROLE", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_ROLE", payload: err.message });
      toast.error(err.message);
    }
  };
};
