import { FC } from "react";
import { TypeSlide } from "../../adminDash/lectureAd/KindEnum";
import { ChapterCode, ChapterImage, ChapterText } from "./ChapterStyle";

const ChapterKind: FC<{ slideKind: string; slideContent: string }> = ({
  slideKind,
  slideContent,
}) => {
  if (slideKind === TypeSlide.Code) {
    return <ChapterCode>{slideContent}</ChapterCode>;
  } else if (slideKind === TypeSlide.Image) {
    return <ChapterImage src={slideContent} />;
  } else if (slideKind === TypeSlide.Text) {
    return <ChapterText>{slideContent}</ChapterText>;
  } else if (slideKind === TypeSlide.Video) {
    return <></>;
  }
  return <div>ChapterKind</div>;
};

export default ChapterKind;
