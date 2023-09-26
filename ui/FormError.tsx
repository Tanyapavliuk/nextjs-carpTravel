type Props = {
  children: string;
};

const FormError = ({ children }: Props): JSX.Element => {
  return (
    <p className="absolute right-0  text-[#FF5757]  text-xs font-extralight tracking-[0.15rem] mb-1 leading-6">
      &#215;{children}
    </p>
  );
};

export default FormError;
