import styled from "styled-components";
const LoadCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* position: relative; */
  z-index: 20;
  height: 100%;
  width: 100%;
  position: fixed;
  backdrop-filter: blur(4px);
  /* ::before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    content: "";
  
  } */
`;
export { LoadCont };
