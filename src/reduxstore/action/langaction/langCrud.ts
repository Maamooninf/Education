import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../../store";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { ActionLanguage } from "./langAInter";
import { Lang } from "../../reducer/langreducer/langRinter";
export const GetLangs = () => {
  return async (
    dispatch: Dispatch<ActionLanguage>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_LANGUAGE" });
      const { data } = await axios.get<Lang[]>(
        "http://localhost:4010/lang/all",
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_LANGUAGE", payload: data });
    } catch (err: any) {
      toast.error(err.message);
      dispatch({ type: "FAILED_GET_LANGUAGE", payload: err.message });
    }
  };
};
