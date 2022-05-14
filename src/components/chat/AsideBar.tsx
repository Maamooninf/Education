import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import {
  GetUsersInConv,
  UpdateUsersInConv,
} from "../../reduxstore/action/useraction/userDashAc";
import { RootState } from "../../reduxstore/store";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import "./ChatBoxStyle.css";
import { Conversation } from "../../reduxstore/reducer/contactreducer/conversation/converRinter";
import { UserForSerach } from "../../reduxstore/reducer/usereducer/userRinter";
import {
  JoinUserConversation,
  LeaveUserConversation,
} from "../../reduxstore/action/contacta/conversation/convACrud";
interface AsideInt {
  socket?: Socket<DefaultEventsMap, DefaultEventsMap>;
  currentChat?: Conversation;
}

function AsideBar({ socket, currentChat }: AsideInt) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentChat && currentChat?.isjoined !== 0) {
      dispatch(GetUsersInConv());
    }
  }, [currentChat]);
  const userDashRed = useSelector((state: RootState) => state.userDash);

  const { users } = userDashRed;

  useEffect(() => {
    if (socket) {
      socket.off("newUser").on("newUser", (user) => {
        if (user) {
          dispatch(UpdateUsersInConv(user));
        }
      });
      socket
        .off("InsertUser")
        .on(
          "InsertUser",
          (payload: { user: UserForSerach; convId: string }) => {
            console.log(payload);
            dispatch(
              JoinUserConversation(payload.convId, "real", payload.user)
            );
          }
        );
      socket
        .off("RemoveUser")
        .on("RemoveUser", (leave: { convId: string; userId: string }) => {
          dispatch(LeaveUserConversation(leave.convId, "real", leave.userId));
        });
    }
    return () => {
      socket?.off("InsertUser");
      socket?.off("RemoveUser");
      socket?.off("newUser");
    };
  }, [socket]);

  return (
    <div className="aside">
      {currentChat
        ? users?.map((use) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px 13px",
                  color: "white",
                  width: "100%",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                key={use._id}
              >
                <p>{use.name}</p>

                <p>{use.Isonline ? "Active" : "offline"}</p>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default AsideBar;
