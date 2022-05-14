import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ClearVars,
  GetMessages,
} from "../../reduxstore/action/contacta/messageac/messageACrud";
import { Conversation } from "../../reduxstore/reducer/contactreducer/conversation/converRinter";
import { RootState } from "../../reduxstore/store";
import "./ChatBoxStyle.css";
function MessagesScroll({ currentChat }: { currentChat: Conversation }) {
  const dispatch = useDispatch();
  const scroll = useRef<HTMLDivElement>(null);
  const messRed = useSelector((state: RootState) => state.MessAge);
  const { messDa, pageNumber, hasMore, messload } = messRed;
  const userRed = useSelector((state: RootState) => state.userSign);

  const { userInfo } = userRed;

  useEffect(() => {
    return () => {
      dispatch(ClearVars());
    };
  }, [currentChat._id, dispatch]);

  const isTop = (el: HTMLElement) => {
    return el.scrollTop === 0;
  };
  const trackScrolling = useCallback(() => {
    const wrappedElement = document.getElementById("listing-container");

    if (
      isTop(wrappedElement!) &&
      messload === false &&
      pageNumber > 1 &&
      currentChat._id
    ) {
      dispatch(GetMessages(currentChat._id, pageNumber));
    }
  }, [pageNumber, messload, currentChat?._id, dispatch]);

  useEffect(() => {
    const wrappedEleme = document.getElementById("listing-container");
    if (hasMore === true) {
      wrappedEleme?.addEventListener("scroll", trackScrolling);
    }
    return () => {
      wrappedEleme?.removeEventListener("scroll", trackScrolling);
    };
  }, [trackScrolling, hasMore]);

  useEffect(() => {
    scroll?.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
      inline: "nearest",
    });
  }, [messDa]);

  return (
    <div className="chatmessages" id="listing-container">
      {messDa?.map((msg, index) => {
        return (
          <div
            key={msg._id}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              {messDa[index].createdAt !==
              messDa[index > 0 ? index - 1 : 0].createdAt ? (
                <div className="dateForm">{msg.createdAt}</div>
              ) : index === 0 ? (
                <div className="dateForm">{msg.createdAt}</div>
              ) : (
                // <div className="dateFormPos">{msg.createdAt}</div>
                ""
              )}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className={
                  msg.author?._id === userInfo?._id ? "own" : "messagebod"
                }
                ref={scroll}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "0",
                    background:
                      msg.author?._id === userInfo?._id ? "#00486c" : "black",
                    borderRadius: "5px",
                    justifyContent: "flex-start",
                    marginTop: "10px",
                    padding: "0px 10px",
                    minWidth: "200px",
                    whiteSpace: "pre-wrap",
                    position: "relative",
                  }}
                >
                  <p style={{ margin: "10px", textTransform: "capitalize" }}>
                    {msg.author.name}
                  </p>
                  <p style={{ marginBottom: "19px" }}> {msg.content}</p>
                  <p
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      right: "2px",
                    }}
                  >
                    {msg.date}
                  </p>
                </div>
                <div
                  style={{
                    height: "50px",
                    width: "50px",
                    background: "black",
                    borderRadius: "100%",
                    margin: "10px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessagesScroll;
