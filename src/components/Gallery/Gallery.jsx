"use client";
import Image from "next/image";
import { useState } from "react";
import slide1 from "../../../public/images/slide1.webp";
import slide2 from "../../../public/images/slide2.webp";
import slide3 from "../../../public/images/slide3.webp";

const Gallery = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const photoArrey = [slide2, slide1, slide3];

  const handleClickBack = (e) => {
    if (activeSlide === 0) {
      setActiveSlide(3);
    }
    setActiveSlide((prevState) => prevState - 1);
  };
  const handleClickNext = () => {
    if (activeSlide === 2) {
      setActiveSlide(-1);
    }
    setActiveSlide((prevState) => prevState + 1);
  };
  const firstSlider = () => {
    switch (activeSlide) {
      case 0:
        return photoArrey[2];
      case 1:
        return photoArrey[0];
      default:
        return photoArrey[1];
    }
  };
  const lastSlider = () => {
    switch (activeSlide) {
      case 0:
        return photoArrey[1];
      case 1:
        return photoArrey[2];
      default:
        return photoArrey[0];
    }
  };
  return (
    <>
      <ul className="md:hidden container mx-auto flex flex-col gap-y-5">
        {photoArrey.map((el, i) => (
          <li key={i}>
            <Image
              src={el}
              alt="nature"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </li>
        ))}
      </ul>
      <div className=" hidden md:block relative container mx-auto">
        <ul className="md:flex md:gap-x-5 sm:items-center  md:mt-[65px] lg:mt-[15px]">
          <li key="0" className="relative w-2/12 lg:w-1/4">
            <Image
              src={firstSlider()}
              alt="a photo of a place that can be visited with the CarpTravel company"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-800/70 to-neutral-800/70"></div>
          </li>
          <li key="1" className="w-8/12 lg:w-max ">
            <Image
              src={photoArrey[activeSlide]}
              alt="a photo of a place that can be visited with the CarpTravel company"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </li>
          <li key="2" className="relative w-2/12 lg:w-1/4">
            <Image
              src={lastSlider()}
              alt="a photo of a place that can be visited with the CarpTravel company"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-800/70 to-neutral-800/70"></div>
          </li>
        </ul>
        <div className="absolute  bottom-[17px] flex justify-center gap-x-[480px] md:translate-x-[6%] lg:translate-x-[17%] lg:gap-x-[650px] xl:translate-x-[26.5%] 2xl:translate-x-[31%]">
          <p
            className="text-3xl font-thin cursor-pointer text-white hover:underline underline-offset-4 decoration-1"
            onClick={handleClickBack}
          >
            BACK
          </p>
          <p
            className="text-3xl font-thin text-white cursor-pointer hover:underline underline-offset-4 decoration-1"
            onClick={handleClickNext}
          >
            NEXT
          </p>
        </div>
      </div>
    </>
  );
};
export default Gallery;
