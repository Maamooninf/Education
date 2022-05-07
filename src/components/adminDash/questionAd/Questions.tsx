import { useState } from "react";
import { useDispatch } from "react-redux";
import { Createques } from "../../../reduxstore/action/questionaction/questionCrud";
import { Question } from "../../../reduxstore/reducer/questionreducer/questionRinter";

import {
  OptionBody,
  OptionContent,
  OptionInput,
  ProButton,
  QuestionBody,
} from "../../proglang/ProStyle";
import AutoComLang from "../../reusable/AutoComLang";

function Questions() {
  const dispatch = useDispatch();

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

  const addLanguage = (newvalue: any) => {
    setquestion((prev) => ({ ...prev, ["language"]: newvalue?._id || "" }));
  };
  const submitQuestion = () => {
    dispatch(Createques(question));
  };

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
      <AutoComLang setState={addLanguage} multiple={false} label="Language" />

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
