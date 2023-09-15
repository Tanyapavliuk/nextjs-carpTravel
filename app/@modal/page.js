"use client";

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
      <div className="absolute w-56 md:w-max py-5 px-7 h-1/5 bg-white inset-x-2/4 inset-y-2/4 translate-y-[-50%] translate-x-[-50%] flex justify-center items-center shadow-slate-200 flex-col">
        <botton
          className="absolute top-4 right-4 w-7 h-7 flex justify-center items-center cursor-pointer"
          onClick={onClose}
        >
          <span className="block">&#10006;</span>
        </botton>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
