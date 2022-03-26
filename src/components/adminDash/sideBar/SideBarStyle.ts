import styled from "styled-components";
interface Side {
  backgroundColor?: string;
  fontSize?: string;
  padding?: string;
  margin?: string;
}
interface OpClose {
  toggle: boolean;
}
const SideBarBody = styled.div<OpClose>`
  display: flex;
  flex-direction: column;

  position: -webkit-sticky;
  position: fixed;
  top: 60px;
  min-height: 100%;
  transition: 0.6s all ease-in-out;
  box-shadow: 0px 0px 2.5px #5c5696;
  width: ${(props) => (!props.toggle ? "30px" : "200px")};
  overflow-x: hidden;
  padding: 5px;
  /* background: #eee; */
`;
const SideShapeBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* 
  border-top: 230px solid rgba(66, 5, 207, 0.959);
  border-right: 230px solid transparent; */
`;
const SlideShap = styled.div<Side>`
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "red"};
  margin: 5px;
`;
const SlideLogoBody = styled.ul`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;
const SlideLogoItem = styled.li<Side>`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: gray;
  padding: ${(props) => (props.padding ? props.padding : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
`;
const SlideShowOrHide = styled.div<OpClose>`
  display: ${(props) => (!props.toggle ? "none" : "flex")};
  justify-content: center;
  align-items: center;
`;
export {
  SideBarBody,
  SideShapeBody,
  SlideShap,
  SlideLogoBody,
  SlideLogoItem,
  SlideShowOrHide,
};
