import styled from "styled-components";
export const HomeDashDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  margin-top: 60px;
  margin-left: 34px;
  padding: 10px;
  overflow-x: hidden;
  width: 100%;
`;

export const DashHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
`;
export const HomeDashText = styled.div`
  margin: 20px;
  font-size: large;
`;
export const HomeChart = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
