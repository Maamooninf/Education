import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../../store";
import { ActionQues } from "./questionAInter";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Option, Question } from "../../reducer/questionreducer/questionRinter";
export const Createques = (question: Question) => {
  return async (dispatch: Dispatch<ActionQues>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_CREATE_QUESTION" });
      const { data } = await axios.post<Question>(
        `http://localhost:4010/question/create/${question.language}`,
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
export const Getques = (language: string) => {
  return async (dispatch: Dispatch<ActionQues>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_QUESTIONS" });
      const { data } = await axios.get<Question[]>(
        `http://localhost:4010/question/all/${language}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_QUESTIONS", payload: data });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: "FAILED_CREATE_QUESTION",
          payload: err.response.data,
        });
      } else {
        dispatch({ type: "FAILED_CREATE_QUESTION", payload: err });
      }
    }
  };
};

export const Getoptions = (language: string, quesId: string) => {
  return async (dispatch: Dispatch<ActionQues>, getState: () => RootState) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_OPTIONS" });
      const { data } = await axios.get<Question>(
        `http://localhost:4010/question/answer/${language}/${quesId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_OPTIONS", payload: data });
    } catch (err: any) {
      if (err.response) {
        dispatch({
          type: "FAILED_CREATE_QUESTION",
          payload: err.response.data,
        });
      } else {
        dispatch({ type: "FAILED_CREATE_QUESTION", payload: err });
      }
    }
  };
};
