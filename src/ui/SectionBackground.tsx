import Image from "next/image";

type Props = {
  children: any;
  image: string;
};

const Background = ({ image, children }: Props): JSX.Element => {
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
