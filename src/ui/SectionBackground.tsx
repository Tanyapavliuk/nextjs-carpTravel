import Image from "next/image";

type Props = {
  image: string;
};

const Background = ({ image }: Props): JSX.Element => {
  return (
    <Image
      alt="Mountains"
      src={image}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
};

export default Background;
