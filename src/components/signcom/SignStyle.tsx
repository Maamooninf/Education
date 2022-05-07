import styled, { createGlobalStyle } from "styled-components";
import { ScreenShap, Signpara } from "./SignInterfaces";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Raleway, sans-serif;
    box-sizing: border-box;
    /* background-color: rgba(97, 18, 143, 0.651); */
    background-color: #f2edf3;
    margin-top: 70px;
  }
`;
const SignCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  overflow: hidden;
`;
const SignRow = styled.div`
  display: flex;
  flex-direction: column;
`;
const Signp = styled.p<Signpara>`
  color: ${(props) => (props.error ? "red" : props.color)};
  padding: 0;
  margin-top: 10px;
`;
const Screen = styled.div`
  background: linear-gradient(90deg, #5d54a4, #7c78b8);
  position: relative;
  height: 500px;
  width: 320px;

  box-shadow: 0px 0px 10px #5c5696;
  @media only screen and (max-width: 600px) {
    width: 290px;
    margin-left: 10px;
  }
  @media only screen and (max-width: 550px) {
    width: 250px;
    height: 475px;
  }
`;
const ScreenCont = styled.div`
  z-index: 1;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  /* justify-content: center; */
`;
const SignForm = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 40px;
  padding-left: 20px;
`;
const SignRoute = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  bottom: 17%;
  left: 0;
  right: 0;
  @media only screen and (max-width: 570px) {
    bottom: 10%;
  }
`;
const SignLabel = styled.label`
  color: #999;
  transform: translate(0.25rem, -3.7rem);
  transition: all 0.2s ease-out;
`;
const SignField = styled.input<Signpara>`
  border: none;
  position: relative;
  font-size: 0.85rem;
  color: black;
  border-bottom: ${(props) =>
    props.error ? "2px solid red" : "2px solid #d1d1d4"};
  background: none;
  padding: 5px;
  /* padding-left: 24px; */
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: 700;
  width: 55%;
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
    border-bottom-color: ${(props) => (props.error ? "red" : "#6a679e")};
  }
  &:focus + label {
    color: #111;
    transform: translate(0, -3.8rem);
  }
  z-index: 10;
`;
const ScreenBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  clip-path: inset(0);
`;
const ScreenShape = styled.div<ScreenShap>`
  transform: rotate(50deg);
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  /* background: linear-gradient(270deg, #5d54a4, #6a679e); */
  background-color: ${(props) => props.backgroundColor};
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
  border-radius: ${(props) => props.borderRadius};
  z-index: ${(props) => props.zIndex};
`;

export {
  SignCont,
  SignRow,
  Signp,
  SignLabel,
  Screen,
  ScreenCont,
  SignRoute,
  SignForm,
  ScreenBack,
  ScreenShape,
  SignField,
  GlobalStyle,
};
