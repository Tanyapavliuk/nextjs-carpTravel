import Form from "./Form";
import Title from "../../ui/Title";

import style from "./ChooseUs.module.css";
import ListTitle from "../../ui/ListTitle";
import Text from "../../ui/TextListContact";

const ChooseUs = () => {
  return (
    <section className={`${style.choose__bg}`} id="career">
      <div className={`${style.chooseUs__bg}`}>
        <div className="container mx-auto py-14 md:py-0 ">
          <div className="md:grid md:grid-cols-[368px_221px] md:gap-x-28 lg:justify-between lg:grid-cols-[539px_293px]">
            <Title>
              Choose <span className="font-medium">US</span>
            </Title>
            <p className=" text-white text-sm font-extralight ml-[100px] mb-9 md:m-0 md:w-[13.8125rem] md:text-justify lg:text-lg lg:w-[18.25rem]">
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.
            </p>
          </div>
          <h3 className="text-white text-3xl font-extralight uppercase ml-[100px] mb-9 md:ml-[80px] md:mb-14">
            Why us ?
          </h3>
          <ul className="flex flex-col gap-y-4 mr-[90px] text-right md:w-[14.0625rem] md:float-left md:mr-[28px] md:gap-y-6 lg:w-3/6 ">
            <li className="lg:grid lg:grid-cols-2 lg:gap-y-6 lg:gap-x-6">
              <ListTitle>Professional development</ListTitle>
              <Text>
                We offer growth opportunities and a creative environment to
                nurture your talents.
              </Text>
            </li>
            <li className="lg:grid lg:grid-cols-2 lg:gap-y-6 lg:gap-x-6">
              <ListTitle>Teamwork</ListTitle>
              <Text>
                Join our close-knit family, where support and inspiration
                abound.
              </Text>
            </li>
            <li className=" lg:grid lg:grid-cols-2 lg:gap-y-6 lg:gap-x-6">
              <ListTitle>Stimulating work environment</ListTitle>
              <Text>
                Flexibility and remote options for a comfortable experience.
              </Text>
            </li>
            <li className="lg:grid lg:grid-cols-2 lg:gap-y-6 lg:gap-x-6">
              <ListTitle>Exciting challenges</ListTitle>
              <Text>
                Unleash your potential through unforgettable projects showcasing
                Carpathian beauty.
              </Text>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${style.chooseUs__bg} py-[54px] md:py-0`}>
        <div className="container m-auto">
          <p className="text-white text-sm font-extralight ml-[100px] mb-[24px] md:mr-[250px] lg:text-lg xl:mr-[340px]">
            Don&apos;t miss your opportunity! Fill out the form right now and
            join our team!
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
