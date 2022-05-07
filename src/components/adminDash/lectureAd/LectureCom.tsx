import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Createlec } from "../../../reduxstore/action/lectureaction/lectureCrud";
import { Lecture } from "../../../reduxstore/reducer/lecturereducer/lectureRinter";
import { ProButton } from "../../proglang/ProStyle";
import AutoComLang from "../../reusable/AutoComLang";
import { TypeSlide } from "./KindEnum";
import KindSlide from "./KindSlide";
import { SelectChoice, OptionValue, LectureBody } from "./LectureStyle";

function LectureAd() {
  const dispatch = useDispatch();

  const [lec, setlec] = useState<Lecture>({
    slides: [
      {
        content: "",
        kind: TypeSlide.Code,
      },
    ],
    language: "",
    title: "",
  });

  const createSlide = () => {
    setlec((prev) => ({
      ...prev,
      slides: [
        ...prev.slides,
        {
          content: "",
          kind: TypeSlide.Code,
        },
      ],
    }));
  };
  const addLanguage = (newvalue: any) => {
    setlec((prev) => ({ ...prev, ["language"]: newvalue?._id || "" }));
  };

  const createlecture = () => {
    dispatch(Createlec(lec));
  };
  const updateSlide = (e: any, index: number) => {
    const { target } = e;
    setlec((prev) => {
      const slides = [...prev?.slides];
      slides[index] = { ...slides[index], [target.name]: target.value };
      return { ...prev, slides };
    });
  };
  return (
    <LectureBody>
      <ToastContainer />

      <AutoComLang setState={addLanguage} multiple={false} label={"Language"} />
      {lec.slides?.map((el, index) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
              width: "100%",
            }}
            key={index}
          >
            <KindSlide
              index={index}
              setlec={setlec}
              kind={el.kind}
              value={el.content}
            />

            <SelectChoice onChange={(e) => updateSlide(e, index)} name="kind">
              <OptionValue>Choose Theme</OptionValue>
              {Object.values(TypeSlide)?.map((key) => (
                <OptionValue key={key} value={key}>
                  {key}
                </OptionValue>
              ))}
            </SelectChoice>
          </div>
        );
      })}
      <ProButton onClick={() => createSlide()}>Add Slide</ProButton>
      <ProButton onClick={() => createlecture()}>Create Lecture</ProButton>
    </LectureBody>
  );
}

export default LectureAd;
