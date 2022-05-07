import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetLecs } from "../../reduxstore/action/lectureaction/lectureCrud";
import { RootState } from "../../reduxstore/store";
import Chapters from "./chapter/Chapters";
import { Prodiv, SideDiv, MainDiv, ChapterNo, ProHead } from "./ProStyle";
import FirstPageIcon from "@material-ui/icons/FirstPage";
function ProLang() {
  const dispatch = useDispatch();
  const [toggle, settoggle] = useState<boolean>(true);
  let { prolang } = useParams();

  const [currentLecture, setcurrentLecture] = useState<string>("");

  useEffect(() => {
    if (prolang) dispatch(GetLecs(prolang));
  }, [prolang, dispatch]);

  const LecRed = useSelector((state: RootState) => state.lecTure);
  const { lecDa } = LecRed;

  return (
    <Prodiv>
      <SideDiv active={toggle}>
        <ProHead>
          Table of Content
          <FirstPageIcon
            style={{ color: "gray", cursor: "pointer", marginTop: "18px" }}
            onClick={() => settoggle(!toggle)}
          />
        </ProHead>
        {lecDa?.map((lec) => {
          return (
            <ChapterNo
              active={currentLecture === lec._id}
              key={lec._id}
              onClick={() => {
                setcurrentLecture(lec._id || "");
              }}
            >
              {lec.title}
            </ChapterNo>
          );
        })}
      </SideDiv>
      <MainDiv>
        <Chapters currentLecture={currentLecture} />
      </MainDiv>
    </Prodiv>
  );
}

export default ProLang;
