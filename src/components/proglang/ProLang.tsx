import { Prodiv, SideDiv, MainDiv, ChapterNo, ProButton } from "./ProStyle";
import Questions from "./Questions";
function ProLang() {
  return (
    <Prodiv>
      <SideDiv>
        <ChapterNo>lecture 1</ChapterNo>
        <ChapterNo>lecture 2</ChapterNo>
      </SideDiv>
      <MainDiv>
        <Questions />
      </MainDiv>
    </Prodiv>
  );
}

export default ProLang;
