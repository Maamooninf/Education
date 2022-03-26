import React, { useState } from "react";
import { Lecture } from "../../../reduxstore/reducer/lecturereducer/lectureRinter";
import { ProButton } from "../../proglang/ProStyle";
import { ChapterTextArea } from "./LectureStyle";

const KindSlide: React.FC<{ kind: number }> = ({ kind }) => {
  const [lec, setlec] = useState<Lecture>({
    slides: [
      {
        content: "",
        kind: 0,
      },
    ],
  });

  const createSlide = () => {
    setlec((prev) => ({
      ...prev,
      slides: [
        ...prev.slides,
        {
          content: "",
          kind: kind,
        },
      ],
    }));
  };
  const updateSlide = (e: any, index: number) => {
    const { target } = e;
    setlec((prev) => {
      const slides = [...prev.slides];
      slides[index] = { ...slides[index], ["content"]: target.value };
      return { ...prev, slides };
    });
  };
  console.log(lec);
  if (kind === 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {lec?.slides.map((el, index) => {
          return (
            <ChapterTextArea
              key={index}
              name="content"
              onChange={(e) => updateSlide(e, index)}
            ></ChapterTextArea>
          );
        })}
        <ProButton onClick={() => createSlide()}>Submit</ProButton>
      </div>
    );
  } else return <></>;
};

export default KindSlide;
