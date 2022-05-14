import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import {
  AddConversation,
  GetConversations,
  GetConversationsOfLang,
  SetChatId,
} from "../../reduxstore/action/contacta/conversation/convACrud";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { RootState } from "../../reduxstore/store";
import { useParams } from "react-router-dom";
import { Conversation } from "../../reduxstore/reducer/contactreducer/conversation/converRinter";
//import { Conversation } from "../../reduxstore/reducer/contactreducer/conversation/converRinter";
interface Convx {
  socket?: Socket<DefaultEventsMap, DefaultEventsMap>;
}
function CovnerCom({ socket }: Convx) {
  const dispatch = useDispatch();
  const userRed = useSelector((state: RootState) => state.userSign);
  const conRed = useSelector((state: RootState) => state.ConVersation);
  const { currentChat, getnew, convDa } = conRed;
  const { userInfo } = userRed;
  let p = useParams();

  useEffect(() => {
    if (p && Object.keys(p).length !== 0) {
      dispatch(GetConversationsOfLang(p.langId!));
    } else {
      dispatch(GetConversations());
    }
  }, [p]);
  useEffect(() => {
    let id = userInfo._id;
    if (socket && getnew === 1) {
      socket.emit("joinAll", { userId: id, groups: convDa });
    }
    if (socket) {
      socket.off("newConversation");
      socket.on("newConversation", (conv: Conversation) => {
        socket.emit("joinhand", conv._id);
        dispatch(AddConversation(conv));
      });
    }
    return () => {
      socket?.off("newConversation");
    };
  }, [getnew, socket]);

  return (
    <div className="aside">
      {convDa?.map((con) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px 13px",
              color: "white",
              width: "100%",
              height: "40px",
              background: currentChat?._id === con._id ? "#00486c" : "",
              justifyContent: "center",
              cursor: "pointer",
            }}
            key={con._id}
            onClick={() => dispatch(SetChatId(con))}
          >
            <p>{con.title}</p>

            <p>{con.lastmessage?.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CovnerCom;
