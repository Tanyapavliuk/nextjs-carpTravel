"use client";
import { useState } from "react";
import Image from "next/image";

import SectionWrapper from "@/src/ui/SectionWrapper";
import Background from "../../ui/SectionBackground";

import AccentText from "./AccentText";
import style from "./Offer.module.css";
import Title from "../../ui/Title";

import main_bg from "../../../public/images/offerBG/offerBg.webp";
import rook_bg from "../../../public/images/offerBG/rockClimbing_BG.webp";
import ballowing_bg from "../../../public/images/offerBG/hotAirBallooning__BG.webp";
import skydaving_bg from "../../../public/images/offerBG/skydiving__BG.webp";
import rafting_bg from "../../../public/images/offerBG/rafting__BG.webp";

import arrey from "../../db/offerTitle.json";

const Offer = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const handleClickItem = (e) => {
    if (!e.target.id) return;
    setCurrentItem(e.target.id);
  };
  const selectorBg = () => {
    switch (currentItem) {
      case "0":
        return main_bg;
      case "1":
        return rook_bg;
      case "2":
        return ballowing_bg;
      case "3":
        return skydaving_bg;
      case "4":
        return rafting_bg;
      default:
        return main_bg;
    }
  };

  return (
    <SectionWrapper id="services">
      <Background image={selectorBg()} />
      <div className="container mx-auto">
        <div className="md:flex md:gap-x-[170px] md:items-center lg:mb-[20px]">
          <Title>
            we <b>offer</b>
          </Title>
          <p className="text-white font-thin text-[43px] text-end md:text-[67px] md:leading-[4.875rem] lg:text-8xl lg:tracking-[-0.245rem]">
            0{+currentItem + 1}/<span className="text-[#FFFFFF33]">05</span>
          </p>
        </div>
        <div className="md:grid md:grid-cols-[463px_1fr] md:gap-x-[20px] lg:grid-cols-2">
          <Image
            src={arrey[currentItem].image}
            alt={arrey[currentItem].title}
            width={607}
            height={429}
            sizes="(min-width: 768px) 50vw, (min-width: 1200px) 50vw, 70vw"
            className="md:w-full"
          />
          <div className="md:grid lg:grid-cols-2 lg:grid-rows-[auto_168px] lg:gap-x-[20px]">
            <p className="text-white text-xs font-extralight tracking-[0.15rem] text-right md:mb-[34px] md:row-start-2 lg:col-start-2 lg:row-start-1 lg:text-left">
              {arrey[currentItem].subTitle}
            </p>
            <ul
              className="text-white uppercase mt-6 mb-8 flex flex-col gap-y-4 font-extralight md:mb-[25px] lg:m-0 lg:text-[28px] lg:gap-y-6"
              onClick={handleClickItem}
            >
              {arrey.map(({ title }, index) => {
                if (+currentItem === index) {
                  return (
                    <AccentText key={index} id={index}>
                      {title}
                    </AccentText>
                  );
                }
                return (
                  <li
                    key={index}
                    id={index}
                    className=" cursor-pointer font-extralight opacity-50 hover:opacity-80 leading-6"
                  >
                    {title}
                  </li>
                );
              })}
            </ul>
            <p className="text-white text-sm font-extralight md:text-[13px] md:text-justify lg:col-start-2 lg:row-start-2 lg:text-lg lg:leading-6">
              Join exciting rafting expeditions on the waterways of the
              Carpathians. Go through challenging waterways and overcome gusty
              waves, feel the adrenaline, and enjoy the incredible views of the
              surrounding mountains.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Offer;
