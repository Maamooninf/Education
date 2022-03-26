import styled from "styled-components";
const LectureBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  @media only screen and (max-width: 700px) {
    margin-left: 25%;
  }
  @media only screen and (max-width: 590px) {
    margin-left: 35%;
  }
  width: 100%;
`;
const LectureContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;
const ChapterTextArea = styled.textarea`
  resize: none;
  min-height: 300px;
  width: 400px;
  background-color: rgb(40, 44, 52);
  padding: 20px;
  font-size: 1.1em;
  color: white;
  @media only screen and (max-width: 590px) {
    width: 70%;
  }
`;
export { LectureContent, ChapterTextArea, LectureBody };
