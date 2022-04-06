import styled from "styled-components";
interface Chapter {
  backgroundColor?: string;
  Color?: string;
}
const LectureBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-left: 34px;
  padding: 10px;
  /* @media only screen and (max-width: 700px) {
    margin-left: 25%;
  }
  @media only screen and (max-width: 590px) {
    margin-left: 35%;
  } */
  width: 100%;
  overflow-x: hidden;
`;
const LectureContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;
const ChapterTextArea = styled.textarea<Chapter>`
  resize: none;
  min-height: 300px;
  width: 400px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "rgb(40, 44, 52)"};
  color: ${(props) => (props.Color ? props.Color : "white")};
  padding: 20px;
  margin: 10px 10px;
  font-size: 1.1em;

  border: none;
  &:focus {
    outline: none;
  }
  /* width: 100%; */
  @media only screen and (max-width: 590px) {
    width: 80%;
  }
`;
const CloudInput = styled.input``;
const SelectChoice = styled.select`
  overflow-y: auto;
  background: linear-gradient(190deg, rgb(69, 119, 228), rgb(11, 136, 253));
  color: black;
  padding: 5px;
  font-size: 1em;

  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const OptionValue = styled.option``;
export {
  LectureContent,
  ChapterTextArea,
  LectureBody,
  SelectChoice,
  OptionValue,
  CloudInput,
};
