type Props = {
  children: string;
  className: string;
};

const Text = ({ className = "", children }: Props): JSX.Element => {
  return (
    <p className={`text-white text-sm font-extralight ${className}`}>
      {children}
    </p>
  );
};

export default Text;
