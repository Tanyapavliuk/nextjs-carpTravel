"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="container mx-auto flex justify-between align-middle pb-9">
        <div>
          <span>
            <Image
              src="/logo.svg"
              alt="SVG"
              className="w-[3.6875rem]"
              width={59}
              height={21}
            />
          </span>
          <h2 className="leading-normal text-white text-sm font-normal tracking-[0.1619rem]">
            CarpTravel
          </h2>
        </div>
        <p
          className="md:hidden uppercase text-sm font-normal tracking-wider leading-normal text-white z-20"
          onClick={() => setModalShow(!modalShow)}
        >
          {modalShow ? "close" : "menu"}
        </p>
        {modalShow && (
          <div className=" w-screen h-screen backdrop-blur-xl bg-[#010A05BF] fixed top-0 left-0 z-10 flex justify-center items-center ">
            <ul className="flex flex-col gap-y-12 items-center text-lg tracking-[0.0875rem] font-normal">
              <li className="cursor-pointer">
                <a>About</a>
              </li>
              <li>Services</li>
              <li>Career</li>
              {/* <li>Gallery</li>
              <li>Contacts</li> */}
            </ul>
          </div>
        )}
        <ul className="hidden md:flex gap-y-12 gap-x-6 items-center text-sm tracking-[ 0.1125rem] font-normal">
          <li className="cursor-pointer">
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#services">Services</Link>
          </li>
          <li>
            <Link href="/#career">Career</Link>
          </li>
          {/* <li>Gallery</li>
          <li>Contacts</li> */}
        </ul>
      </div>
    </>
  );
};

export default Header;
