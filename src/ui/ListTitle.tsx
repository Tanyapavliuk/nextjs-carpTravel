type Props = {
  children: string;
};

const ListTitle = ({ children }: Props): JSX.Element => {
  return (
    <h4 className="text-white text-sm font-normal mb-2 md:text-base lg:text-lg">
      {children}
    </h4>
  );
};

export default ListTitle;
