import { LinearProgress } from "@mui/material";
import axios from "axios";
import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import { Lecture } from "../../../reduxstore/reducer/lecturereducer/lectureRinter";
import { CloudInput } from "../lectureAd/LectureStyle";

const PushCloud: FC<{
  setlec: React.Dispatch<React.SetStateAction<Lecture>>;
  index: number;
}> = ({ setlec, index }) => {
  const [progress, setprog] = useState<number>(0);
  const handlesetuploaded = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      let type = e.target.files[0].type.substr(0, 5);

      if (type === "video" || type === "image") {
        const content = e.target.files[0];
        const formData = new FormData();

        formData.append("file", content);

        formData.append("upload_preset", "");

        axios
          .request({
            method: "post",

            url: ``,

            data: formData,

            onUploadProgress: (p) => {
              setprog((p.loaded / p.total) * 100);
            },
          })

          .then((res: any) => {
            setlec((prev) => {
              const slides = [...prev?.slides];
              slides[index] = {
                ...slides[index],
                [content]: res.data.secure_url,
              };
              return { ...prev, slides };
            });
            toast.success(`${type} Added Successfully`);
            setprog(0);
          })

          .catch((err) => {
            toast.error(`NetWork Error`);
          });
      }
    }
  };
  return (
    <>
      {progress ? (
        <LinearProgress
          variant="determinate"
          value={progress}
          style={{ margin: "15px", width: "200px" }}
        />
      ) : (
        ""
      )}
      <CloudInput type="file" onChange={(e) => handlesetuploaded(e)} />
    </>
  );
};

export default PushCloud;
