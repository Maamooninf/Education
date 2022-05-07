import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Getoptions } from "../../reduxstore/action/questionaction/questionCrud";
import { RootState } from "../../reduxstore/store";
import {
  QuestionHeader,
  QuestionesGroup,
  ShowOption,
} from "./QuestionComStyle";
import QuestionSide from "./QuestionSide";
function QuestionCom() {
  let lang = useParams();
  const dispatch = useDispatch();
  const [currentindex, setindex] = useState<number>(0);
  const QueRed = useSelector((state: RootState) => state.quesTion);
  const { questionsDa } = QueRed;
  return (
    <div
      style={{
        display: "flex",
        background: "#eee",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <QuestionSide setindex={setindex} currentindex={currentindex} />
      <QuestionesGroup>
        <QuestionHeader>
          {questionsDa[currentindex]?.description}
        </QuestionHeader>
        {questionsDa[currentindex]?.options?.map((op, index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
              key={index}
            >
              {op.isTrue === true ? "True" : op.isTrue === false ? "False" : ""}
              <ShowOption
                onClick={() => {
                  dispatch(
                    Getoptions(
                      lang.idlang ? lang.idlang : "",
                      questionsDa[currentindex]._id!
                    )
                  );
                }}
              >
                {op.description}
              </ShowOption>
            </div>
          );
        })}
      </QuestionesGroup>
    </div>
  );
}

export default QuestionCom;
