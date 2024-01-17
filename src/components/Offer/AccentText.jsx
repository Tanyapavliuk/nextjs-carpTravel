const AccentText = ({ children }) => {
  return (
    <li className="text-white  text-xl font-medium lg:text-[28px] flex items-center cursor-pointer">
      <span className=" inline-block w-1.5 h-1.5 bg-white rotate-45 mr-2"></span>
      {children}
    </li>
  );
};

export default AccentText;
