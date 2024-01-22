"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import links from "../../db/navigation.json";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (modalShow) {
      document.body.classList.add("isModalShow");
    } else {
      document.body.classList.remove("isModalShow");
    }
  }, [modalShow]);

  const handleClickLink = (e) => {
    setModalShow(false);
  };

  return (
    <>
      <div className="container mx-auto flex justify-between align-middle pb-9">
        <div>
          <Link href="/" className="cursor-pointer">
            <span>
              <Image
                priority
                src="/logo.svg"
                alt="logo company CarpTravel"
                className="w-[3.6875rem] pl-2"
                width={59}
                height={21}
              />
            </span>
            <span className="leading-normal tracking-tight text-white text-sm font-normal hover:underline underline-offset-4 decoration-1 cursor-pointer">
              CarpTravel
            </span>
          </Link>
        </div>
        <button
          type="botton"
          className="md:hidden uppercase text-sm font-normal tracking-wider leading-normal text-white z-20"
          onClick={() => setModalShow(!modalShow)}
        >
          {modalShow ? "close" : "menu"}
        </button>
        {modalShow && (
          <div
            id="isOpenModal"
            className="isModalShow w-screen h-screen backdrop-blur-xl bg-[#010A05BF] fixed top-0 left-0 z-10 flex justify-center items-center"
          >
            <ul className="text-white flex flex-col gap-y-12 items-center text-lg tracking-[0.0875rem] font-normal">
              {links.map(({ title, link, id }) => (
                <li key={id}>
                  <Link
                    onClick={handleClickLink}
                    href={link}
                    className="hover:underline underline-offset-4 decoration-1 cursor-pointer"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <ul className="text-white hidden md:flex gap-y-12 gap-x-6 items-center text-sm tracking-[ 0.1125rem] font-normal">
          {links.map(({ title, link, id }) => (
            <li key={id}>
              <Link
                onClick={handleClickLink}
                href={link}
                className="hover:underline underline-offset-4 decoration-1 cursor-pointer"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
