const Label = ({ style, children }) => {
  const styles = [
    "text-white",
    "relative",
    "text-xs",
    "font-extralight",
    "tracking-[0.15rem]",
    "mb-1",
    "leading-6",
    style,
  ].join(" ");
  console.log(styles);
  return <h2 className={styles}>{children}</h2>;
};

export default Label;
