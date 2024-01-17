type Props = {
  style: string;
  children: string;
};

const Label = ({ style, children }: Props): JSX.Element => {
  return (
    <h2
      className={`text-white relative text-xs font-extralight leading-normal tracking-widest mb-1 ${style}`}
    >
      {children}
    </h2>
  );
};

export default Label;
