type Props = { children: string; href?: string };

const LinkContact = ({ href: to, children }: Props): JSX.Element => {
  return (
    <a
      className="hover:underline underline-offset-4 decoration-1 text-white text-sm font-normal  md:text-base lg:text-lg"
      href={to}
    >
      {children}
    </a>
  );
};

export default LinkContact;
