import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSlides } from "../../../reduxstore/action/lectureaction/lectureCrud";
import { RootState } from "../../../reduxstore/store";
import ChapterKind from "./ChapterKind";
import { ChapterContent } from "./ChapterStyle";

const Chapters: FC<{ currentLecture?: string }> = ({ currentLecture }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentLecture && currentLecture !== "") {
      dispatch(GetSlides(currentLecture));
    }
  }, [currentLecture, dispatch]);
  const LecRed = useSelector((state: RootState) => state.lecTure);
  const { slidDa, lecDa } = LecRed;

  if (currentLecture) {
    return (
      <ChapterContent>
        {slidDa?.map((lec) => {
          return lec.slides.map((sl) => {
            return (
              <ChapterKind
                slideContent={sl.content}
                key={sl._id}
                slideKind={sl.kind}
              />
            );
          });
        })}
      </ChapterContent>
    );
  } else if (lecDa && lecDa.length > 0)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            background: "rgb(40, 44, 52)",
            padding: "0px 8px",
            borderRadius: "8px",
            color: "white",
            fontFamily: "Amita",
          }}
        >
          Select lecture
        </h3>
      </div>
    );
  else return <></>;
};

export default Chapters;
