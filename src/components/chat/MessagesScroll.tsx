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

  return (
    <div className="chatmessages" id="listing-container">
      {messDa?.map((msg) => {
        return (
          <div key={msg._id}>
            <div
              className={
                msg.author?._id === userInfo?._id ? "own" : "messagebod"
              }
              ref={scroll}
            >
              <p>{msg.author.name}</p>
              {msg.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessagesScroll;
