import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetLangs } from "../../reduxstore/action/langaction/langCrud";
import { Createques } from "../../reduxstore/action/questionaction/questionCrud";
import { RootState } from "../../reduxstore/store";
import { OptionValue, SelectChoice } from "../adminDash/lectureAd/LectureStyle";
import { Question } from "./ProLangInterface";

import {
  OptionBody,
  OptionContent,
  OptionInput,
  ProButton,
  QuestionBody,
} from "./ProStyle";

function Questions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetLangs());
  }, [dispatch]);
  const LangRed = useSelector((state: RootState) => state.lanGuage);
  const { langDa } = LangRed;
  const [question, setquestion] = useState<Question>({
    description: "",
    options: [
      {
        description: "",
        isTrue: false,
      },
      {
        description: "",
        isTrue: false,
      },
      {
        description: "",
        isTrue: false,
      },
      {
        description: "",
        isTrue: false,
      },
    ],
    language: "",
  });

  const handlchange = (e: any) => {
    setquestion((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateOption = (e: any, index: number) => {
    const { target } = e;
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setquestion((prev) => {
      const options = [...prev.options];
      options[index] = { ...options[index], [name]: value };
      return { ...prev, options };
    });
  };

  const submitQuestion = () => {
    dispatch(Createques(question));
  };
  console.log(question);
  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <SelectChoice name="language" onChange={(e) => handlchange(e)}>
        <OptionValue>Choose Language</OptionValue>
        {langDa?.map((el) => {
          return (
            <OptionValue key={el._id} value={el._id}>
              {el.lang}
            </OptionValue>
          );
        })}
      </SelectChoice>

      <QuestionBody name="description" onChange={(e) => handlchange(e)} />
      {question.options.map((el, index) => {
        return (
          <OptionBody key={index}>
            <OptionContent
              name="description"
              onChange={(e) => updateOption(e, index)}
            />
            <OptionInput
              type="checkbox"
              defaultChecked={el.isTrue}
              name="isTrue"
              onChange={(e) => updateOption(e, index)}
            />
          </OptionBody>
        );
      })}

      <ProButton onClick={() => submitQuestion()}>Create Exersize</ProButton>
    </div>
  );
}

export default Questions;
