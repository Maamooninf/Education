import axios from "axios";
import { Dispatch } from "react";
import { Question } from "../../../components/proglang/ProLangInterface";
import { RootState } from "../../store";
import { ActionQues } from "./questionAInter";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
export const Createques = (question: Question) => {
  return async (dispatch: Dispatch<ActionQues>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_CREATE_QUESTION" });
      const { data } = await axios.post<Question>(
        "http://localhost:4010/question/create",
        question,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_CREATE_QUESTION", payload: question });
    } catch (err: any) {
      if (err.response) {
        toast.error("Failed to Create Question");
        dispatch({
          type: "FAILED_CREATE_QUESTION",
          payload: err.response.data,
        });
      } else {
        toast.error(err.message);
        dispatch({ type: "FAILED_CREATE_QUESTION", payload: err });
      }
    }
  };
};
