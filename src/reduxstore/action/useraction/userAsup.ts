import axios from "axios";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { User, UserOrig } from "../../reducer/usereducer/userRinter";
import { ActionUser } from "./actionInterface";
import { RootState } from "../../store";

export const Register = (user: User) => {
  return async (dispatch: Dispatch<ActionUser>) => {
    try {
      dispatch({ type: "REQUEST_RIGISTER" });
      const { data } = await axios.post(
        "http://localhost:4010/auth/signup",
        user
      );
      dispatch({ type: "SUCCESS_RIGISTER", payload: data });
      toast.success(data);
    } catch (err: any) {
      toast.error("Failed Rigister");
      if (err.response) {
        dispatch({ type: "FAILED_RIGISTER", payload: err.response.data });
      } else {
        dispatch({ type: "FAILED_RIGISTER", payload: err.message });
      }
    }
  };
};
export const CreateAccount = (user: UserOrig) => {
  return async (dispatch: Dispatch<ActionUser>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_RIGISTER" });
      const { data } = await axios.post(
        "http://localhost:4010/auth/createAccount",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      toast.success(data);
      dispatch({ type: "SUCCESS_RIGISTER", payload: data });
    } catch (err: any) {
      toast.error(err.message);
      dispatch({ type: "FAILED_RIGISTER", payload: err.message });
    }
  };
};
