import React from "react";
import { DropBody } from "../navbar/NavBarStyle";
import Exit from "@material-ui/icons/ExitToAppOutlined";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { Conversation } from "../../reduxstore/reducer/contactreducer/conversation/converRinter";
import { useDispatch } from "react-redux";
import { LeaveUserConversation } from "../../reduxstore/action/contacta/conversation/convACrud";
const DropChat: React.FC<{
  drop: boolean;
  socket?: Socket<DefaultEventsMap, DefaultEventsMap>;
  current?: Conversation;
}> = ({ drop, socket, current }) => {
  const dispatch = useDispatch();
  if (drop) {
    const leaveGroup = () => {
      // socket?.emit("leavehand", current?._id);
      dispatch(LeaveUserConversation(current?._id!, "static"));
    };
    return (
      <DropBody backgroundColor="#00486c">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            cursor: "pointer",
          }}
          onClick={() => leaveGroup()}
        >
          <Exit />
          <p>leave group</p>
        </div>
      </DropBody>
    );
  } else {
    return <></>;
  }
};

export default DropChat;
