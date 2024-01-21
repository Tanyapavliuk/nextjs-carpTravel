type Props = {
  children: any;
  className: string;
  id: string;
};

const SectionWrapper = ({
  className = "pt-[54px]",
  id,
  children,
}: Props): JSX.Element => {
  return (
    <section
      id={id}
      className={`relative block bg-hero pb-[56px] md:pb-[64px] lg:py-[104px]  after:content-[' '] after:block after:inset-0 after:bg-[#020F0880] after:bg-opacity-50 after:absolute after:z-[-1] ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
