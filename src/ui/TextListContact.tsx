type Props = {
  children: string;
};
const Text = ({ children }: Props): JSX.Element => {
  return (
    <p className="text-white text-xs font-extralight lg:text-left">
      {children}
    </p>
  );
};

export default Text;
