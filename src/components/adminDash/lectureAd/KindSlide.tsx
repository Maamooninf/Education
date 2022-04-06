import { Lecture } from "../../../reduxstore/reducer/lecturereducer/lectureRinter";
import PushCloud from "../cloud/PushCloud";
import { TypeSlide } from "./KindEnum";
import { ChapterTextArea } from "./LectureStyle";

const KindSlide: React.FC<{
  kind: string;
  value: string;
  setlec: React.Dispatch<React.SetStateAction<Lecture>>;
  index: number;
}> = ({ kind, setlec, value, index }) => {
  const updateSlide = (e: any, index: number) => {
    const { target } = e;
    setlec((prev) => {
      const slides = [...prev.slides];
      slides[index] = { ...slides[index], [target.name]: target.value };
      return { ...prev, slides };
    });
  };
  if (kind === TypeSlide.Code) {
    return (
      <ChapterTextArea
        name="content"
        onChange={(e) => updateSlide(e, index)}
        value={value}
      />
    );
  }

  //
  else if (kind === TypeSlide.Text)
    return (
      <ChapterTextArea
        name="content"
        onChange={(e) => updateSlide(e, index)}
        value={value}
        backgroundColor="#ffffffd6"
        Color="black"
      />
    );
  else if (kind === TypeSlide.Image) {
    return <PushCloud setlec={setlec} index={index} />;
  } else return <></>;
};
export default KindSlide;
