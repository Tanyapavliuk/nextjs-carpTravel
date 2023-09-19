"use client";
import Image from "next/image";
import { useState } from "react";
import style from "./Offer.module.css";

import AccentText from "./AccentText";

const Offer = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const arrey = [
    "ATVs Traveling",
    "Rock climbing",
    "Hot air ballooning",
    "Skydiving",
    "Rafting",
  ];
  const currentPhoto = [
    "/images/ATVs_Traveling.jpg",
    "/images/Rock_climbing.jpg",
    "/images/Hot_air_ballooning.jpg",
    "/images/Skydiving.jpg",
    "/images/Rafting.jpg",
  ];

  const handelClickItem = (e) => {
    if (!e.target.id) return;
    setCurrentItem(e.target.id);
  };
  return (
    <section className={style.offer__bg} id="services">
      <div className="container mx-auto py-[54px] lg:py-[104px]">
        <div className="md:flex md:gap-x-[170px] md:items-center lg:mb-[20px]">
          <h2 className="text-white md:text-[67px] md:tracking-[-0.1675rem] md:mt-0 mt-6 uppercase text-[40px] font-thin leading-[3.5rem] tracking-[-0.1rem] lg:text-8xl lg:tracking-[-0.245rem]">
            we <b>offer</b>
          </h2>
          <p className="text-white font-thin text-[43px] text-end md:text-[67px] md:leading-[4.875rem] lg:text-8xl lg:tracking-[-0.245rem]">
            0{+currentItem + 1}/<span className="text-[#FFFFFF33]">05</span>
          </p>
        </div>
        <div className="md:grid md:grid-cols-[463px_1fr] md:gap-x-[20px] lg:grid-cols-2">
          <Image
            src={currentPhoto[currentItem]}
            alt="ATVs_Traveling"
            width={300}
            height={300}
            className="md:w-full"
          />
          <div className="md:grid lg:grid-cols-2 lg:grid-rows-[auto_168px] lg:gap-x-[20px]">
            <p className="text-white text-xs font-extralight tracking-[0.15rem] text-right md:mb-[34px] md:row-start-2 lg:col-start-2 lg:row-start-1 lg:text-left">
              Feel the adrenaline rush
            </p>
            <ul
              className="text-white uppercase mt-6 mb-8 flex flex-col gap-y-4 font-extralight md:mb-[25px] lg:m-0 lg:text-[28px] lg:gap-y-6"
              onClick={handelClickItem}
            >
              {arrey.map((el, index) => {
                if (+currentItem === index) {
                  return (
                    <AccentText key={index} id={index}>
                      {el}
                    </AccentText>
                  );
                }
                return (
                  <li
                    key={index}
                    id={index}
                    className="cursor-pointer font-extralight opacity-50 hover:opacity-80"
                  >
                    {el}
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
    </section>
  );
};

export default Offer;
