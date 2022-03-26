import styled from "styled-components";
const Prodiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;
const SideDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const ChapterNo = styled.div`
  box-shadow: 0px 0px 0px 2px #eee;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 50px;
  margin-top: 5px;
  margin-left: 5px;
  border-radius: 10px;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 60%;
`;

const ChapterContent = styled.div`
  display: flex;
  margin-top: 10px;
  word-spacing: 10px;
  white-space: pre-wrap;
  height: auto;
  color: white;
  background-color: rgb(40, 44, 52);
  padding: 20px;
`;

const ProButton = styled.button`
  margin-top: 10px;
  cursor: pointer;
  width: 150px;
  height: 50px;
  border: none;
  color: white;
  font-size: 1em;
  background-color: rgb(1, 163, 50);
  border-radius: 10px;
`;
const QuestionShow = styled.div`
  display: flex;
  /* align-items: center; */
  margin-top: 20px;
  height: fit-content;
  padding: 10px;
  line-height: 25px;
  color: rgb(40, 44, 52);
  box-shadow: 0px 0px 0px 2px #eee;
  white-space: pre-wrap;
  border-radius: 5px;
`;
const OptionShow = styled.div`
  box-shadow: 0px 0px 0px 2px #eee;
  background-color: rgb(238, 245, 240);
  border-radius: 10px;
  margin-top: 10px;
  padding: 15px;
  font-size: 1.2em;
  cursor: pointer;
`;

const QuestionBody = styled.textarea`
  display: flex;
  /* justify-content: center;
  align-items: center;
  text-align: center; */
  margin-top: 20px;
  padding: 10px;
  font-size: 1.2em;
  color: rgb(40, 44, 52);
  min-height: 90px;
  resize: none;
  &:focus {
    outline: none;
  }
`;
const OptionBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

const OptionContent = styled.textarea`
  background-color: rgb(238, 245, 240);
  border-radius: 10px;
  margin-top: 5px;
  padding: 5px;
  font-size: 1.2em;
  resize: none;
  border: none;
  &:focus {
    outline: none;
  }
`;
const OptionInput = styled.input`
  margin: 3px;
`;
export {
  Prodiv,
  SideDiv,
  MainDiv,
  ChapterNo,
  ChapterContent,
  ProButton,
  QuestionBody,
  OptionBody,
  OptionContent,
  OptionInput,
  QuestionShow,
  OptionShow,
};
