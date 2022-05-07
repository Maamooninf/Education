import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breatheAnimation } from "../../navbar/NavBarStyle";
interface Side {
  backgroundColor?: string;
  fontSize?: string;
  padding?: string;
  margin?: string;
}
interface OpClose {
  toggle?: boolean;
}

const SideBarBody = styled.div<OpClose>`
  display: flex;
  flex-direction: column;
  /* transition: 0.2s all ease-in-out; */
  width: ${(props) => (!props.toggle ? "30px" : "220px")};
  transition: width 0.4s ease-out;
  overflow-x: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  padding: 5px;
  background: #fff;
  z-index: 999;

  /* @media screen and (max-width: 900px) {
  } */
`;
const SideShapeBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  color: #9a55ff;
  font-size: 2.1em;
`;
const SideShap = styled.div<Side>`
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "red"};
  margin: 5px;
`;
const SideLogoBody = styled.ul`
  display: flex;
  flex-direction: column;
`;
const SideItem = styled.li<Side>`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  margin-top: 10px;
  /* 
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : "clamp(0.8em,0.95rem,1.4rem)"}; */
`;

const SideShowOrHide = styled.div<OpClose>`
  display: ${(props) => (!props.toggle ? "none" : "flex")};
  animation-name: ${breatheAnimation};
  animation-duration: 1.3s;
  font-size: 1.1em;
`;

const SideNav = styled(NavLink)`
  color: gray;
  text-decoration: none;
  margin-top: 18px;
  &.active {
    color: #0074d9;
    border-left: 4px solid #0074d9;
  }
`;
const SideImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;
export {
  SideBarBody,
  SideShapeBody,
  SideShap,
  SideLogoBody,
  SideItem,
  SideShowOrHide,
  SideImage,
  SideNav,
};
