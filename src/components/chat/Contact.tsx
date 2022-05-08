import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxstore/store";
import ChatBox from "./ChatBox";
import io, { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import "./ChatBoxStyle.css";
import AsideBar from "./AsideBar";
import CovnerCom from "./CovnerCom";
import { SetChatId } from "../../reduxstore/action/contacta/conversation/convACrud";
function Contact() {
  const dispatch = useDispatch();
  const [socket, setsocket] =
    useState<Socket<DefaultEventsMap, DefaultEventsMap>>();

  const conRed = useSelector((state: RootState) => state.ConVersation);
  const { currentChat } = conRed;

  useEffect(() => {
    let mount = true;

    if (mount) {
      if (!socket) {
        setsocket(io("http://localhost:4010"));
      }
    }
    return () => {
      mount = false;
      console.log("leave compnent");
      dispatch(SetChatId());
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: "60px",
        height: "90vh",
        width: "100%",
      }}
    >
      <CovnerCom socket={socket} />

      <ChatBox currentChat={currentChat} socket={socket} />

      <AsideBar socket={socket} currentChat={currentChat} />
    </div>
  );
}

export default Contact;
