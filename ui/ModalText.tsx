type Props = {
  children: string;
};

const ModalText = ({ children }: Props): JSX.Element => {
  return <p className="text-white text-base font-extralight">{children}</p>;
};

export default ModalText;
