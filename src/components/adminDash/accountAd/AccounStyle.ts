import styled from "styled-components";
const AccountDiv = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 40px;
  margin-top: 60px;
  overflow-x: hidden;

  padding: 20px;
  width: 100%;
`;
const AccountInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  /* align-items: center; */

  align-self: center;
`;
export { AccountDiv, AccountInfo };
