import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
interface CustomLink {
  fontSize?: string;
}
interface CustomDrop {
  backgroundColor?: string;
}
export const breatheAnimation = keyframes`
 0% { opacity: 0 }
 20% { opacity: 0.4 }
 100% {  opacity: 1; }
`;
const NavBarBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  min-height: 60px;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: #fff;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  /* background: linear-gradient(to bottom, #fefdd0 20%, #f2fec1 80%); */

  color: black;
`;
const NavLogoName = styled.div`
  font-size: 1.7em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  justify-content: center;
  position: relative;
  transition: 0.7s all ease-in-out;
`;
const NavLinks = styled(Link)<CustomLink>`
  display: flex;
  align-items: center;
  color: black;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.2em")};
  text-decoration: none;
  margin-left: 20px;
`;
const Navele = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  align-items: center;
  font-size: 1.2em;
  margin-left: 20px;
  padding: 5px;
  cursor: pointer;
`;
const NavImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin-right: 10px;
`;

const DropBody = styled.div<CustomDrop>`
  display: flex;
  justify-content: space-around;
  /* text-align: center; */
  flex-direction: column;
  height: 100px;
  width: 150px;
  position: absolute;
  top: 55px;
  right: 8px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  box-shadow: 0 3px 21px 0 rgb(0 0 0 / 20%);
  /* transition: all 0.3s ease-out; */
  animation-name: ${breatheAnimation};
  animation-duration: 0.4s;
`;
export { NavBarBody, NavLogoName, NavInfo, NavLinks, Navele, NavImg, DropBody };
