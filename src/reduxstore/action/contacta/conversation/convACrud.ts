import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../../../store";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ActionConversation } from "./convAInter";
import { Conversation } from "../../../reducer/contactreducer/conversation/converRinter";
import { ActionUser } from "../../useraction/actionInterface";
import { UserForSerach } from "../../../reducer/usereducer/userRinter";
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
      await axios.post("http://localhost:4010/conversation/createConv", conv, {
        headers: {
          "Content-Type": "application/json",
          authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
        },
      });
    } catch (err: any) {
      toast.error(err.message);
      dispatch({ type: "FAILED_CREATE_CONVERSATION", payload: err.message });
    }
  };
};
export const AddConversation = (conver: Conversation) => {
  return async (dispatch: Dispatch<ActionConversation>) => {
    try {
      dispatch({ type: "SUCCESS_ADD_CONVERSATION", payload: conver });
    } catch (err: any) {
      toast.error(err.message);
      dispatch({ type: "FAILED_ADD_USER_CONVERSATION", payload: err.message });
    }
  };
};

export const GetConversations = () => {
  return async (
    dispatch: Dispatch<ActionConversation>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_CONVERSATIONS" });
      const { data } = await axios.get<Conversation[]>(
        "http://localhost:4010/conversation/all",
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_CONVERSATIONS", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_CONVERSATIONS", payload: err.message });
    }
  };
};
export const GetConversationsOfLang = (langId: string) => {
  return async (
    dispatch: Dispatch<ActionConversation>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      dispatch({ type: "REQUEST_GET_CONVERSATIONS" });
      const { data } = await axios.get<Conversation[]>(
        `http://localhost:4010/conversation/certain/${langId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_CONVERSATIONS", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_GET_CONVERSATIONS", payload: err.message });
    }
  };
};
export const SetChatId = (id?: Conversation) => {
  return async (
    dispatch: Dispatch<ActionConversation>,
    getState: () => RootState
  ) => {
    dispatch({ type: "SET_CURRENT_CHAT", payload: id });
  };
};

export const JoinUserConversation = (
  convId: string,
  type: "real" | "static",
  user?: UserForSerach
) => {
  return async (
    dispatch: Dispatch<ActionConversation | ActionUser>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      if (type === "static") {
        dispatch({ type: "REQUEST_ADD_USER_CONVERSATION" });

        await axios.put(
          `http://localhost:4010/conversation/adduser/${convId}`,
          { wh: "weee" },
          {
            headers: {
              "Content-Type": "application/json",
              authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
            },
          }
        );
      } else {
        const {
          ConVersation: { currentChat },
        } = getState();
        if (currentChat?._id === convId) {
          dispatch({ type: "ADD_USER_CONVERSATION_N", payload: user! });
          if (userInfo._id === user?._id) {
            let curr = { ...currentChat, isjoined: 1 };
            dispatch({ type: "SET_CURRENT_CHAT", payload: curr });
          }
        }
      }
    } catch (err: any) {
      toast.error(err.message);
      dispatch({ type: "FAILED_ADD_USER_CONVERSATION", payload: err.message });
    }
  };
};
export const LeaveUserConversation = (
  convId: string,
  type: "real" | "static",
  userId?: string
) => {
  return async (
    dispatch: Dispatch<ActionConversation | ActionUser>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();
      if (type === "static") {
        dispatch({ type: "REQUEST_ADD_USER_CONVERSATION" });

        await axios.delete(
          `http://localhost:4010/conversation/removeuser/${convId}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
            },
          }
        );
      } else {
        const {
          ConVersation: { currentChat },
        } = getState();
        if (userInfo._id === userId) {
          if (currentChat?._id === convId) {
            dispatch({ type: "SET_CURRENT_CHAT", payload: undefined });
          }
          dispatch({ type: "SUCCESS_REMOVE_CONVERSATION", payload: convId });
        }
        if (currentChat?._id === convId) {
          dispatch({ type: "DELETE_USER_CONVERSATION", payload: userId! });
        }
      }
    } catch (err: any) {
      toast.error(err.message);
      dispatch({ type: "FAILED_ADD_USER_CONVERSATION", payload: err.message });
    }
  };
};
