import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-6 md:grid md:grid-cols-[426px_230px] md:gap-x-12 lg:grid-cols-[646px_294px]  md:justify-between">
        <div className="md:col-start-2 md:pb-7">
          <div className="flex justify-end">
            <b className="text-white lg:text-[98px] text-[37px] leading-normal font-medium md:text-[67px]">
              7
            </b>
            <span className="lg:text-[98px] md:text-[67px] md:tracking-wider uppercase text-white text-[37px] font-thin tracking-[0.1041rem] leading-normal">
              days
            </span>
          </div>
          <p className="lg:text-[16px] lg:tracking-[2.28em] md:text-[14px] uppercase text-end text-white text-xs tracking-[0.5925rem] font-light leading-normal mt-[-16px]">
            journey
          </p>
        </div>
        <h1 className="lg:text-8xl lg:tracking-[-0.245rem] lg:leading-[6rem] md:col-start-1 md:row-start-1 md:row-end-3 md:text-[67px] md:tracking-[-0.1675rem] uppercase w-[17.5rem] leading-[3.5rem] font-thin text-4xl extra-big text-white pb-6 tracking-[-0.1rem] text-[40px]">
          <b>uncover</b> carpathian&apos;s secrets
        </h1>
        <p className="md:row-start-3 md:text-sm md:w-[16.375rem] text-[10px] leading-4 font-extralight text-white w-[9.8125rem] lg:w-[38rem]">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
        <p className="lg:w-[18.375rem] md:text-justify md:w-[14.375rem] md:col-start-2 text-justify text-white text-sm font-extralight w-[17.5rem] ">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>

        <Link
          href="/#career"
          className="cursor-pointer md:row-start-3 text-white py-[0.1563rem] text-center bg-white/10 relative leading-[3rem] z-0 hover:bg-white/20"
        >
          <Image
            src="/images/btnRigth.svg"
            alt="SVG"
            className="absolute top-0"
            width={42}
            height={53}
          />
          <Image
            src="/images/btnLeft.svg"
            alt="SVG"
            className="absolute top-0 right-0"
            width={42}
            height={53}
          />
          JOIN NOW
        </Link>
      </div>
    </div>
  );
};

export default Main;
