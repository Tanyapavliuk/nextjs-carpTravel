import Form from "./Form";
import Title from "../../ui/Title";

import image from "../../../public/images/contactBg.webp";
import media from "../../db/social.json";
import SectionWrapper from "../../ui/SectionWrapper";
import Background from "../../ui/SectionBackground";
import Text from "../../ui/Text";

const Contact = () => {
  return (
    <SectionWrapper id="contact" className={`px-[20px]`}>
      <Background image={image} />
      <div className="container mx-auto">
        <Title>
          Contact <b>US</b>
        </Title>
        <div className="lg:grid lg:grid-cols-[1fr_1fr]">
          <div className="grid grid-cols-[1fr_81px] gap-x-5 gap-y-6 mt-9 md:grid-cols-[187px_81px_50px_52px_71px] md:ml-9 md:mb-16 lg:grid-cols-[1fr_1fr] lg:gap-y-[64px] lg:mt-[70px]">
            <ul className="text-right">
              <li key="1">
                <a
                  className="hover:underline underline-offset-4 decoration-1 text-white text-xs font-normal md:text-base lg:text-lg "
                  href="tel:+38(098)1234567"
                >
                  +38 (098) 12 34 567
                </a>
              </li>
              <li key="2">
                <a
                  className="hover:underline underline-offset-4 decoration-1 text-white text-sm font-normal  md:text-base lg:text-lg"
                  href="tel:+38(073)1234567"
                >
                  +38 (073) 12 34 567
                </a>
              </li>
            </ul>
            <Text className=" lg:text-left leading-6">Phone number</Text>
            <a
              className="hover:underline underline-offset-4 decoration-1 text-white text-sm text-right md:text-left font-normal md:text-base lg:text-lg md:col-start-1 md:row-start-2 lg:text-right"
              href="mailto:support@carptravel.com"
            >
              support@carptravel.com
            </a>
            <Text className="md:text-left md:col-start-2 md:row-start-2 md:flex md:items-center leading-6">
              E-mail
            </Text>
            <Text className="text-right md:text-left md:col-start-4 lg:md:col-start-1 lg:pt-[60px] lg:text-right leading-6">
              Follow us
            </Text>
            <div className="lg:pt-[60px] flex flex-col">
              {media.map((el, i) => (
                <a
                  target="_blank"
                  href={el.link}
                  key={i}
                  className="text-white text-sm font-normal hover:underline underline-offset-4 decoration-1 md:text-base lg:text-lg cursor-pointer"
                >
                  {el.name}
                </a>
              ))}
            </div>
          </div>
          <Form />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
