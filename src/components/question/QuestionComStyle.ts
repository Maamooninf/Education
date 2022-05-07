import styled from "styled-components";
const QuestionesGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 70px;
  box-sizing: border-box;
`;
const QuestionNumber = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid green;
  margin: 5px;
`;
const QuestionHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 70%;
  padding: 20px;
  max-height: 200px;
  overflow: auto;
  overflow-x: hidden;
  white-space: pre-line;
  background: #cbc669;
  word-spacing: 10px;
  margin: 5px;
`;
const ShowOption = styled.div`
  background-color: rgb(238, 245, 240);
  margin-top: 5px;
  padding: 10px;
  color: white;
  width: 70%;
  font-size: 1.2em;
  word-spacing: 10px;
  max-height: 200px;
  overflow: auto;
  overflow-x: hidden;
  white-space: pre-line;
  background: linear-gradient(
    190deg,
    rgba(2, 0, 36, 0.7) 0%,
    rgba(0, 151, 255, 1) 0%,
    rgba(9, 9, 121, 1) 100%
  );
`;
export { QuestionesGroup, QuestionHeader, QuestionNumber, ShowOption };
