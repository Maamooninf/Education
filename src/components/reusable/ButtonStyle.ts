import styled from "styled-components";

export const ButtonCl = styled.button`
  position: absolute;
  bottom: 20%;
  left: 16%;
  width: 66%;
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
  font-family: "Amita", cursive;
  font-size: clamp(1rem, 1.5vw, 3rem);
  transition: all 0.5s ease-in-out;
  margin: 5px;
  background-image: linear-gradient(
    to right,
    #6905bb,
    #0551a8,
    #3800a0,
    #096ab9
  );
  /* box-shadow: 0 2px 5px rgba(242, 97, 103, 0.4); */
  &:hover {
    background-position: 98% 0;
    background-image: linear-gradient(
      to left,
      #0551a8,
      #6905bb,
      #096ab9,
      #3800a0
    );
    transition: all 0.5s ease-in-out;
  }
  &:focus {
    outline: none;
  }
`;
