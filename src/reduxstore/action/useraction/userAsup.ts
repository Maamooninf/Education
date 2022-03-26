import axios from "axios";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { User } from "../../reducer/usereducer/userRinter";
import { ActionUser } from "./actionInterface";

export const Register = (user: User) => {
  return async (dispatch: Dispatch<ActionUser>) => {
    try {
      dispatch({ type: "REQUEST_RIGISTER" });
      const { data } = await axios.post(
        "http://localhost:4010/auth/signup",
        user
      );
      dispatch({ type: "SUCCESS_RIGISTER", payload: data });
      toast.success("check your email to confirm");
    } catch (err: any) {
      if (err.request?.status === 502) {
        toast.error(err.response.data);
        dispatch({ type: "FAILED_RIGISTER", payload: err.response.data });
      } else if (err.response) {
        toast.error("Failed Rigister");
        dispatch({ type: "FAILED_RIGISTER", payload: err.response.data });
      } else {
        toast.error("Failed Rigister");
        dispatch({ type: "FAILED_RIGISTER", payload: err });
      }
    }
  };
};
