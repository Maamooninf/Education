import { useState } from "react";
import { Slide } from "../../proglang/ProLangInterface";
import KindSlide from "./KindSlide";
import { LectureContent, LectureBody } from "./LectureStyle";

function LectureAd() {
  const [slide, setslide] = useState<Slide>({
    content: "",
    kind: 0,
  });

  return (
    <LectureBody>
      <LectureContent>
        <KindSlide kind={slide.kind}></KindSlide>
      </LectureContent>
    </LectureBody>
  );
}

export default LectureAd;
