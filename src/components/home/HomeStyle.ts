import { Link } from "react-router-dom";
import styled from "styled-components";
import header from "../../images/banner-bg.png";
interface Paragraph {
  color?: string;
  width?: string;
  lineHight?: string;
}
interface HeadFont {
  fontSize?: string;
}
interface ButtonSlide extends MainContianer {
  fontFamily?: string;
}
interface MainContianer {
  backgroundColor?: string;
}

const Homediv = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;

  height: max-content;
  width: 100%;
`;
const ImgeHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 550px;
  background-image: url(${header});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
  } */

  /* &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(109.6deg, #a10384 100%, #510257 98.6%);
    // background-image: linear-gradient(80deg, #eaee44, #33d0ff);
    z-index: 2;
    opacity: 0.3;
  } */
`;
const InfoHeader = styled.div`
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: clamp(1.5rem, 2.5vw, 4rem);
  color: white;

  position: relative;
  top: 0;
  left: 0;

  z-index: 90;
`;
const ParaHeader = styled.p<Paragraph>`
  color: ${(props) => (props.color ? props.color : "white")};
  line-height: ${(props) => (props.lineHight ? props.lineHight : "20px")};
  word-spacing: 2px;
  padding: 5px;
  width: ${(props) => (props.width ? props.width : "auto")};
`;

const HeaderButton = styled.button<ButtonSlide>`
  width: 190px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  //  margin:"20px",
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "Amita")};
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  transition: all 0.5s ease-in-out;
  margin: 25px;
  background-image: linear-gradient(
    to right,
    #6905bb,
    #0551a8,
    #3800a0,
    #096ab9
  );
  &:hover {
    background-position: 98% 0;
    background-image: linear-gradient(
      to left,
      #6905bb,
      #096ab9,
      #0551a8,
      #3800a0
    );

    transition: all 0.5s ease-in-out;
  }
  &:focus {
    outline: none;
  }
`;
const SlideCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: max-content;
  z-index: 92;
`;
const SlideBody = styled.div`
  /* flex: 1 1 stretch; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  width: 250px;
  box-shadow: 0px 0px 0px 2px #eee;
  min-height: 210px;
  margin: 20px;
  background-color: white;
  color: black;
  border-radius: 20px;
  top: -30px;
  @media screen and (max-width: 600px) {
    top: -40px;
  }
`;
const SlideImgCont = styled.div`
  height: 120px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 100%;
  position: absolute;
  top: -90px;
  @media screen and (max-width: 600px) {
    height: 90px;
    width: 90px;
    top: -60px;
  }
`;
const SlideImg = styled.img`
  height: 90%;
  width: 90%;
  border-radius: 100%;
`;
const SlideHead = styled.h2<HeadFont>`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : "clamp(0.8rem, 1.2vw, 1.4rem)"};
  margin-top: 10px;
`;
const SlidLang = styled.div<MainContianer>`
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  height: max-content;
  padding: 50px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#D9EEE1"};
  /* z-index: 3; */
  /* &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 600px;
 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
  } */
`;
const SlidLangBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const SlideLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export {
  ImgeHeader,
  Homediv,
  InfoHeader,
  ParaHeader,
  HeaderButton,
  SlideCont,
  SlideBody,
  SlideImg,
  SlideImgCont,
  SlideHead,
  SlidLang,
  SlidLangBody,
  SlideLink,
};
