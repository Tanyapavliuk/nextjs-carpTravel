import SectionWrapper from "@/src/ui/SectionWrapper";
import Background from "../../ui/SectionBackground";
import Title from "../../ui/Title";
import image from "../../../public/images/aboutBg_mobile.webp";

const About = () => {
  return (
    <div className="relative">
      <SectionWrapper id="about" className={`px-[20px] py-[54px]`}>
        <Background image={image} />
        <div className=" container mx-auto lg:relative">
          <div className="md:relative lg:static">
            <div className="md:grid md:grid-cols-[408px_1fr] md:gap-x-[76px] lg:grid-cols-[606px_1fr] lg:gap-x-6">
              <Title>
                who <span className="font-light">we are</span>
              </Title>
              <div>
                <p className="md:w-[13.8125rem] text-white text-sm font-extralight w-[11.25rem] pb-5">
                  <b>a team</b> of enthusiasts who are fully committed to the
                  mission of creating unforgettable and extraordinary trips to
                  the most beautiful parts of the Carpathians. Our goal is not
                  just to show you the natural wonders of the mountains, but to
                  provide you with a deep immersion in their magical atmosphere.
                </p>
                <p className="text-white text-sm font-extralight w-[11.25rem] pb-10 md:w-[13.8125rem] md:p-0">
                  <b>We believe</b> that nature has the power to inspire,
                  strengthen character and provide new perspectives. Therefore,
                  each of our tours is aimed at unlocking your potential,
                  enriching your spiritual world and creating unforgettable
                  memories.
                </p>
              </div>
            </div>
            <div className="ml-24 md:ml-0 flex flex-col pb-10 md:w-[13.8125rem] md:absolute md:bottom-0 md:left-0 md:p-0 md:justify-normal lg:left-[75%]">
              <h3 className="text-white uppercase text-sm font-normal md:justify-start">
                From vacationers
              </h3>
              <h3 className="text-white text-right uppercase text-sm font-normal">
                to active travelers
              </h3>
              <p className=" text-white text-sm font-extralight ">
                we have a tour for everyone.
              </p>
            </div>
          </div>
          <p className="text-white text-sm font-extralight md:w-[28.9375rem] md:ml-[241px] md:mt-14 lg:m-0 lg:mt-[72px] lg:w-[606px]">
            <b>We use methods</b> that are time-tested and proven. Our expert
            guides with in-depth knowledge of the Carpathian landscapes lead you
            safely through the mysteries of these mountains.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
