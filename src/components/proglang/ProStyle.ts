import { Link } from "react-router-dom";
import styled from "styled-components";
interface ItemClick {
  active: boolean;
}
const Prodiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f2edf3;
  min-height: 91vh;

  width: 100%;
  box-sizing: border-box;
  margin-top: 53px;
`;
const SideDiv = styled.div<ItemClick>`
  display: ${(props) => (props.active ? "flex" : "none")};
  flex-direction: column;
  transition: 0.2s all ease-in-out;
  width: 220px;
  overflow-y: auto;

  background-color: white;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 62px;
  padding: 5px 10px;

  z-index: 999;
`;
const ProHead = styled.h2`
  padding: 10px;
  font-family: "Railway";
`;
const ChapterNo = styled.div<ItemClick>`
  display: flex;
  align-items: center;
  margin-top: 25px;
  line-height: 30px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#0074d9" : "black")};
  border-left: ${(props) => (props.active ? "4px solid #0074d9" : "")};
  padding: 0px 10px;
`;
const ProLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 20px; */
  margin-left: 15%;
  width: 70%;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0%;
  }
`;

const ProButton = styled.button`
  margin-top: 10px;
  cursor: pointer;
  width: 150px;
  height: 50px;
  margin: 20px;
  border: none;
  color: white;
  font-size: 1em;
  background-color: rgb(1, 163, 50);
  border-radius: 10px;
`;
const QuestionShow = styled.div`
  display: flex;

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

  margin-top: 20px;
  padding: 10px;
  font-size: 1.2em;
  color: white;
  min-height: 90px;
  width: 70%;
  background: linear-gradient(
    190deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 151, 255, 1) 0%,
    rgba(9, 9, 121, 1) 100%
  );
  resize: none;
  &:focus {
    outline: none;
  }
`;
const OptionBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  width: 80%;
`;

const OptionContent = styled.textarea`
  background-color: rgb(238, 245, 240);
  border-radius: 10px;
  margin-top: 5px;
  padding: 5px;
  font-size: 1.2em;
  resize: none;
  border: none;
  background: linear-gradient(
    190deg,
    rgba(2, 0, 36, 0.7) 0%,
    rgba(0, 151, 255, 1) 0%,
    rgba(9, 9, 121, 1) 100%
  );
  color: white;
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
  ProLink,
  ProButton,
  QuestionBody,
  OptionBody,
  OptionContent,
  OptionInput,
  QuestionShow,
  OptionShow,
  ProHead,
};
