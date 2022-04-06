import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../../../store";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ActionConversation } from "./convAInter";
import { Conversation } from "../../../reducer/contactr/conversation/converRinter";
export const CreateConversation = (conv: Conversation) => {
  return async (
    dispatch: Dispatch<ActionConversation>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_CREATE_CONVERSATION" });
      const { data } = await axios.post(
        "http://localhost:4010/conversation/createConv",
        conv,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      toast.success(data);
      dispatch({ type: "SUCCESS_CREATE_CONVERSATION", payload: data });
    } catch (err: any) {
      toast.error(err.message);
      dispatch({ type: "FAILED_CREATE_CONVERSATION", payload: err.message });
    }
  };
};
