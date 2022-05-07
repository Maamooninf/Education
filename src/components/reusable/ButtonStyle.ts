import styled from "styled-components";

export const ButtonCl = styled.button`
  font-weight: 600;
  width: 180px;
  color: #fff;
  cursor: pointer;
  //  margin:"20px",
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  /* font-family: "Amita", cursive; */
  font-size: clamp(1.3rem, 1.6vw, 1.8rem);
  transition: all 0.5s ease-in-out;
  margin: 25px;
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
