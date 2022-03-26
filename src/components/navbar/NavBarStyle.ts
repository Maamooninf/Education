import styled from "styled-components";
import { Link } from "react-router-dom";
const NavBarBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  color: white;
  min-height: 60px;
  position: sticky;
  top: 0;
  z-index: 100;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;

    height: 100%;
    width: 100%;
    background-image: linear-gradient(180deg, #6441a5 0%, #420a70 100%);
    z-index: -1;
    opacity: 0.9;
  }
`;
const NavLogoName = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: 1.7em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  justify-content: center;
`;
const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.2em;
  text-decoration: none;
  margin-left: 20px;
`;
const Navele = styled.div`
  font-size: 1.2em;
  margin-left: 20px;
  cursor: pointer;
`;
export { NavBarBody, NavLogoName, NavInfo, NavLinks, Navele };
