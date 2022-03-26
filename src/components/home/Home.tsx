import {
  ImgeHeader,
  Homediv,
  InfoHeader,
  HeaderButton,
  ParaHeader,
  SlideCont,
  SlideBody,
  SlideImg,
  SlideImgCont,
  SlideHead,
  SlidLang,
  SlidLangBody,
} from "./HomeStyle";
import prog from "../../images/left-image.png";
import lect from "../../images/right-image.png";
import quiz from "../../images/blog-item-02.png";
function Home() {
  return (
    <Homediv>
      <ImgeHeader>
        <InfoHeader>
          <ParaHeader width="60%" lineHight="45px">
            We provide the best road map to grow up your programming skills
          </ParaHeader>
          <HeaderButton>Get Started</HeaderButton>
        </InfoHeader>
      </ImgeHeader>
      <SlideCont>
        <SlideBody>
          <SlideImgCont>
            <SlideImg src={lect} />
          </SlideImgCont>
          <SlideHead>Lectures And Videos</SlideHead>
          <ParaHeader color={"black"} width="100%" lineHight="40px">
            Learn about any programming language by reading lectures and
            watching videos
          </ParaHeader>
        </SlideBody>
        <SlideBody>
          <SlideImgCont>
            <SlideImg src={lect} />
          </SlideImgCont>
          <SlideHead>Exercies</SlideHead>
          <ParaHeader color={"black"} width="100%" lineHight="40px">
            You can test what did you learned by implmenting a small quiz after
            each lecture
          </ParaHeader>
        </SlideBody>
        <SlideBody>
          <SlideImgCont>
            <SlideImg src={prog} />
          </SlideImgCont>
          <SlideHead>Discussions groups</SlideHead>
          <ParaHeader color={"black"} width="100%" lineHight="40px">
            You can make discussion with others in Certain programming language
          </ParaHeader>
        </SlideBody>
      </SlideCont>
      <SlidLang>
        <SlidLangBody>
          <SlideHead fontSize="clamp(1.7rem, 2.9vw, 3.1rem)">HTML</SlideHead>
          <ParaHeader color={"black"} width="100%" lineHight="80px">
            The language for building web pages
          </ParaHeader>
          <HeaderButton fontFamily="Courier New">Learn HTML!</HeaderButton>
        </SlidLangBody>
      </SlidLang>
      <SlidLang backgroundColor="#FFF4A3">
        <SlidLangBody>
          <SlideHead fontSize="clamp(1.7rem, 2.9vw, 3.1rem)">CSS</SlideHead>
          <ParaHeader color={"black"} width="100%" lineHight="80px">
            The language for styling web pages
          </ParaHeader>
          <HeaderButton fontFamily="Courier New">Learn HTML!</HeaderButton>
        </SlidLangBody>
      </SlidLang>
    </Homediv>
  );
}

export default Home;
