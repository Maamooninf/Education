import axios from "axios";
import { Dispatch } from "react";
import { RootState } from "../../../store";
import "react-toastify/dist/ReactToastify.css";
import { ActionMessage } from "./messageAInter";
import {
  Message,
  MessageCreate,
} from "../../../reducer/contactreducer/message/messageRinter";
import { ActionConversation } from "../conversation/convAInter";
export const CreateMessage = (
  message?: MessageCreate,
  type?: "real" | "static",
  realMess?: Message
) => {
  return async (
    dispatch: Dispatch<ActionMessage | ActionConversation>,
    getState: () => RootState
  ) => {
    try {
      if (type === "static") {
        const {
          userSign: { userInfo },
        } = getState();
        await axios.post<Message>(
          "http://localhost:4010/message/createMessage",
          message,
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
        if (
          currentChat &&
          realMess &&
          realMess.conversation === currentChat._id
        ) {
          dispatch({ type: "SUCCESS_CREATE_MESSAGE", payload: realMess! });
        }
        dispatch({
          type: "UPDATE_CONVERSATION_OREDER",
          payload: {
            convId: realMess?.conversation!,
            lastmessage: realMess?.content!,
          },
        });
      }
    } catch (err: any) {
      dispatch({ type: "FAILED_CREATE_MESSAGE", payload: err.message });
    }
  };
};

export const GetMessages = (conv: string, pageNumber: number) => {
  return async (
    dispatch: Dispatch<ActionMessage>,
    getState: () => RootState
  ) => {
    try {
      const {
        userSign: { userInfo },
      } = getState();

      if (pageNumber === 1) dispatch({ type: "REQUEST_GET_MESSAGES" });
      else {
        dispatch({ type: "REQUEST_APPEND_MESSAGES" });
      }
      const {
        MessAge: { messDa, pageSize },
      } = getState();
      const { data } = await axios.get<Message[]>(
        `http://localhost:4010/message/all/${conv}?page=${pageNumber}&offset=${
          messDa.length % pageSize
        }`,

        {
          headers: {
            "Content-Type": "application/json",
            authorization: userInfo.accesstoken ? userInfo.accesstoken : "",
          },
        }
      );
      dispatch({ type: "SUCCESS_GET_MESSAGES", payload: data });
    } catch (err: any) {
      dispatch({ type: "FAILED_CREATE_MESSAGE", payload: err.message });
    }
  };
};

export const ClearVars = () => {
  return async (dispatch: Dispatch<ActionMessage>) => {
    dispatch({ type: "CLEAR_VARS_MESSAGE" });
  };
};
