import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import {
  ClearVars,
  CreateMessage,
  GetMessages,
} from "../../reduxstore/action/contacta/messageac/messageACrud";
import {
  Message,
  MessageCreate,
} from "../../reduxstore/reducer/contactreducer/message/messageRinter";
import SendIcon from "@mui/icons-material/Send";
import { RootState } from "../../reduxstore/store";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import "./ChatBoxStyle.css";
import { Conversation } from "../../reduxstore/reducer/contactreducer/conversation/converRinter";
import { JoinUserConversation } from "../../reduxstore/action/contacta/conversation/convACrud";
import Arrow from "@material-ui/icons/ArrowDownward";
import DropChat from "./DropChat";
import MessagesScroll from "./MessagesScroll";
interface Chatx {
  currentChat?: Conversation;
  socket?: Socket<DefaultEventsMap, DefaultEventsMap>;
}
function ChatBox({ currentChat, socket }: Chatx) {
  const dispatch = useDispatch();
  const userRed = useSelector((state: RootState) => state.userSign);

  const { userInfo } = userRed;
  const [message, setmessage] = useState("");
  const [tog, setTog] = useState<boolean>(false);

  const messRed = useSelector((state: RootState) => state.MessAge);
  const { pageNumber } = messRed;
  useEffect(() => {
    return () => {
      dispatch(ClearVars());
    };
  }, []);
  useEffect(() => {
    if (currentChat && currentChat.isjoined !== 0 && pageNumber === 1) {
      dispatch(GetMessages(currentChat._id, 1));
    }
    return () => {
      setmessage("");
    };
  }, [currentChat, dispatch, pageNumber]);

  useEffect(() => {
    if (socket) {
      socket
        .off("newMessage", (msg: Message) => {
          dispatch(CreateMessage(undefined, "real", msg));
        })
        .on("newMessage", (msg: Message) => {
          dispatch(CreateMessage(undefined, "real", msg));
        });
    }
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, dispatch]);

  const handleMessage = () => {
    const messageBody: MessageCreate = {
      _id: "",
      author: userInfo?._id || "",
      content: message,
      conversation: currentChat?._id || "",
    };
    dispatch(CreateMessage(messageBody, "static"));
    setmessage("");
  };

  const handlejoin = (convId: string) => {
    socket?.emit("joinhand", convId);
    dispatch(JoinUserConversation(convId, "static"));
  };

  return (
    <div className="chatbox">
      {!currentChat ? (
        <>
          <div className="chatmessages">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                height: "100%",
              }}
            >
              select a chat to start messaging
            </div>
          </div>
        </>
      ) : currentChat?.isjoined !== 0 ? (
        <>
          <div
            style={{
              display: "flex",
              position: "relative",
              flexDirection: "row",
              justifyContent: "space-between",
              background: "#00486c",
              width: "95%",
              padding: "20px 30px",
              margin: "0px",
              color: "white",
            }}
          >
            {currentChat.title}

            <Arrow
              style={{ fontSize: "1.3em", cursor: "pointer" }}
              onClick={() => setTog((prev) => !prev)}
            />
            <DropChat drop={tog} socket={socket} current={currentChat} />
          </div>
          <MessagesScroll currentChat={currentChat} />
          <div className="chatsender">
            <textarea
              value={message}
              onChange={(e) => {
                setmessage(e.target.value);
              }}
              className="Messageinput"
            />
            <SendIcon onClick={handleMessage} style={{ cursor: "pointer" }} />
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              position: "relative",
              flexDirection: "row",
              justifyContent: "space-between",
              background: "#00486c",
              width: "95%",
              padding: "20px 30px",
              margin: "0px",
              color: "white",
            }}
          >
            {currentChat.title}
          </div>
          <div className="chatmessages"></div>
          <div className="chatsender">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                height: "90%",
                width: "100%",
                background: "black",
                padding: "10px 0px",
              }}
              onClick={() => handlejoin(currentChat._id)}
            >
              Join Group
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ChatBox;
