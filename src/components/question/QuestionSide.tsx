import React, { useEffect, useState } from "react";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import { Getques } from "../../reduxstore/action/questionaction/questionCrud";
import {
  SideBarBody,
  SideItem,
  SideLogoBody,
  SideNav,
  SideShowOrHide,
} from "../adminDash/sideBar/SideBarStyle";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../reduxstore/store";
import { ChapterNo } from "../proglang/ProStyle";
import { Question } from "../../reduxstore/reducer/questionreducer/questionRinter";
interface CurrentField {
  setindex: Function;
  currentindex: number;
}
function QuestionSide({ setindex, currentindex }: CurrentField) {
  const dispatch = useDispatch();
  let lang = useParams();
  const QueRed = useSelector((state: RootState) => state.quesTion);
  const { questionsDa } = QueRed;
  useEffect(() => {
    if (lang && lang.idlang) {
      dispatch(Getques(lang.idlang));
    }
  }, [lang]);
  const [toggle, settoggle] = useState<boolean>(false);
  return (
    <SideBarBody toggle={toggle}>
      <SideItem>
        {toggle ? (
          <FirstPageIcon
            style={{ color: "gray", cursor: "pointer" }}
            onClick={() => settoggle(!toggle)}
          />
        ) : (
          <LastPageIcon
            style={{
              color: "gray",
              cursor: "pointer",
            }}
            onClick={() => settoggle(!toggle)}
          />
        )}
        <SideShowOrHide toggle={toggle}>Quiz</SideShowOrHide>
      </SideItem>

      {questionsDa &&
        questionsDa.map((qu, index) => {
          return (
            <ChapterNo
              active={currentindex === index}
              key={index}
              onClick={() => setindex(index)}
            >
              <SideShowOrHide toggle={toggle}>Question</SideShowOrHide>
              <h2> {index + 1}</h2>
            </ChapterNo>
          );
        })}
    </SideBarBody>
  );
}

export default QuestionSide;
