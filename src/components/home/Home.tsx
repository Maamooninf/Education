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
  SlideLink,
} from "./HomeStyle";
import prog from "../../images/left-image.png";
import lect from "../../images/right-image.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { GetLangs } from "../../reduxstore/action/langaction/langCrud";
import { RootState } from "../../reduxstore/store";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetLangs());
  }, [dispatch]);
  const LangRed = useSelector((state: RootState) => state.lanGuage);
  const { langDa } = LangRed;
  const scroll = useRef<HTMLDivElement>(null);

  return (
    <Homediv>
      <ImgeHeader>
        <InfoHeader>
          <ParaHeader width="60%" lineHight="45px">
            We provide the best road map to grow up your programming skills
          </ParaHeader>
          <HeaderButton
            onClick={() => {
              scroll?.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </HeaderButton>
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
      <div ref={scroll}>
        {langDa?.map((lan) => {
          return (
            <SlidLang backgroundColor="#FFF4A3" key={lan._id}>
              <SlidLangBody>
                <SlideHead fontSize="clamp(1.7rem, 2.9vw, 3.1rem)">
                  {lan.lang}
                </SlideHead>
                <ParaHeader color={"black"} width="100%" lineHight="80px">
                  {lan.description}
                </ParaHeader>
                <HeaderButton>
                  <SlideLink to={`/lang/${lan._id}`}>Start Learn</SlideLink>
                </HeaderButton>
                <HeaderButton>
                  <SlideLink to={`/lang/${lan._id}`}>Start Disscuss</SlideLink>
                </HeaderButton>
              </SlidLangBody>
            </SlidLang>
          );
        })}
      </div>
    </Homediv>
  );
}

export default Home;
