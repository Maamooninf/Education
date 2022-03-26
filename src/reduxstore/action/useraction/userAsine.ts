import axios from "axios";
import { Dispatch } from "react";
import { User } from "../../reducer/usereducer/userRinter";
import { ActionUser } from "./actionInterface";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
export const Login = (user: User) => {
  return async (dispatch: Dispatch<ActionUser>) => {
    try {
      dispatch({ type: "REQUEST_SIGN" });
      const { data } = await axios.post<User>(
        "http://localhost:4010/auth/signin",
        user
      );
      Cookies.set("AccessToken", data.accesstoken!);
      localStorage.setItem("RefreshTokenn", data.refreshtoken!);
      data.refreshtoken = undefined;
      localStorage.setItem("UserData", JSON.stringify(data));
      dispatch({ type: "SUCCESS_SIGN", payload: data });
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response.data.message);
        dispatch({ type: "FAILED_SIGN", payload: err.response.data });
      } else {
        toast.error(err.message);
        dispatch({ type: "FAILED_SIGN", payload: err });
      }
    }
  };
};

export const Logout = () => {
  return async (dispatch: Dispatch<ActionUser>) => {
    try {
      localStorage.clear();
      Cookies.remove("AccessToken");
      dispatch({ type: "SUCCESS_SIGNOUT" });
    } catch (err) {
      console.log(err);
    }
  };
};
