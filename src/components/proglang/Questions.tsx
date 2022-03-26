import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Createques } from "../../reduxstore/action/questionaction/questionCrud";
import { RootState } from "../../reduxstore/store";
import { Option, Question } from "./ProLangInterface";
import {
  OptionBody,
  OptionContent,
  OptionInput,
  OptionShow,
  ProButton,
  QuestionBody,
  QuestionShow,
} from "./ProStyle";

function Questions() {
  const dispatch = useDispatch();
  const quesTion = useSelector((state: RootState) => state.quesTion);
  const { questionsDa } = quesTion;

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
    lecture: "",
  });
  const handlchange = (e: any) => {
    setquestion((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //Createques
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
  return (
    <>
      {questionsDa?.map((el: Question, index: number) => {
        return (
          <>
            <QuestionShow>
              <h3>{index + 1}.</h3>
              {el.description}
            </QuestionShow>
            {el.options.map((op: Option) => {
              return <OptionShow>{op.description}</OptionShow>;
            })}
          </>
        );
      })}

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
      <ProButton onClick={() => submitQuestion()}>Submit</ProButton>
    </>
  );
}

export default Questions;
