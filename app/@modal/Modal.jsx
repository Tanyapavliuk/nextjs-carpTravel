"use client";

import style from "./Modal.module.css";

const MyModal = ({ onClose, children }) => {
  const onClickBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return (
    <div
      onClick={onClickBackdrop}
      className="fixed w-full h-full top-0 left-0 bg-white/[0.05] flex justify-center items-center"
    >
      <div className="w-56 h-1/5 md:w-2/4 inset-x-2/4 inset-y-2/4 translate-y-[-50%] ">
        <div
          className={`absolute py-5 px-7 h-1/5 ${style.modalBg} flex justify-center items-center shadow-slate-200 flex-col`}
        >
          <botton
            className="absolute top-4 right-4 w-7 h-7 flex justify-center items-center cursor-pointer"
            onClick={onClose}
          >
            <span className="block">&#10006;</span>
          </botton>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MyModal;
