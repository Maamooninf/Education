import styled from "styled-components";
const ChapterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 20px;
`;

const ChapterText = styled.div`
  min-height: 200px;
  padding: 10px;
  word-spacing: 10px;
  white-space: pre-wrap;
`;

const ChapterCode = styled.div`
  min-height: 200px;
  padding: 10px;
  margin-top: 10px;
  background-color: rgb(40, 44, 52);
  word-spacing: 10px;
  white-space: pre-wrap;
  color: white;
`;

const ChapterImage = styled.img`
  /* height: 100%; */
`;

export { ChapterContent, ChapterText, ChapterCode, ChapterImage };
