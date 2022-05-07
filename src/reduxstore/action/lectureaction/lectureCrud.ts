import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../../store";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ActionLecture } from "./lectureAInter";
import { Lecture } from "../../reducer/lecturereducer/lectureRinter";
export const Createlec = (lecture: Lecture) => {
  return async (
    dispatch: Dispatch<ActionLecture>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_CREATE_LECTURE" });
      const { data } = await axios.post<Lecture>(
        "http://localhost:4010/lecture/create",
        lecture,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );

      dispatch({ type: "SUCCESS_CREATE_LECTURE", payload: [data] });
      toast.success("Lecture Added Successfully");
    } catch (err: any) {
      dispatch({ type: "FAILED_CREATE_LECTURE", payload: err.message });
      toast.error(err.message);
    }
  };
};

export const GetLecs = (langId: string) => {
  return async (
    dispatch: Dispatch<ActionLecture>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_LECTURES" });
      const { data } = await axios.get(
        `http://localhost:4010/lecture/lan/${langId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_LECTURES", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_LECTURES", payload: err.message });
      toast.error("Something went wrong");
    }
  };
};

export const GetSlides = (lecId: string) => {
  return async (
    dispatch: Dispatch<ActionLecture>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_SLIDES" });
      const { data } = await axios.get<Lecture[]>(
        `http://localhost:4010/lecture/slid/${lecId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_SLIDES", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_SLIDES", payload: err.message });
    }
  };
};
