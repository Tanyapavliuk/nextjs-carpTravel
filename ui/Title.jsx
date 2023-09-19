const Title = ({ children }) => {
  return (
    <h2 className="text-white md:text-[67px] md:tracking-[-0.1675rem] md:mt-0 mt-6 uppercase text-[40px] font-thin leading-[3.5rem] tracking-[-0.1rem] lg:text-8xl lg:tracking-[-0.245rem]">
      {children}
    </h2>
  );
};

export default Title;
