import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { GetLangs } from "../../../reduxstore/action/langaction/langCrud";
import { Createlec } from "../../../reduxstore/action/lectureaction/lectureCrud";
import { Lecture } from "../../../reduxstore/reducer/lecturereducer/lectureRinter";
import { RootState } from "../../../reduxstore/store";
import { ProButton } from "../../proglang/ProStyle";
import { TypeSlide } from "./KindEnum";
import KindSlide from "./KindSlide";
import { SelectChoice, OptionValue, LectureBody } from "./LectureStyle";

function LectureAd() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetLangs());
  }, [dispatch]);
  const LangRed = useSelector((state: RootState) => state.lanGuage);
  const { langDa } = LangRed;
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

  const updateLect = (e: any) => {
    setlec((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      <SelectChoice onChange={(e) => updateLect(e)} name="language">
        <OptionValue>Choose Language</OptionValue>
        {langDa?.map((el) => {
          return (
            <OptionValue key={el._id} value={el._id}>
              {el.lang}
            </OptionValue>
          );
        })}
      </SelectChoice>
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
