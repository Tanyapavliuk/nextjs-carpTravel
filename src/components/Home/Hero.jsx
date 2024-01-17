import Header from "./Header";
import Main from "./Home";

import image from "../../../public/images/hero.webp";
import Background from "../../ui/SectionBackground";
import SectionWrapper from "../../ui/SectionWrapper";

const Hero = () => {
  return (
    <SectionWrapper className="pt-[36px]">
      <Background image={image} />
      <Header />
      <Main />
    </SectionWrapper>
  );
};

export default Hero;
