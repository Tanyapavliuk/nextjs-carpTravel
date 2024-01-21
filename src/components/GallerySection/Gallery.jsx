import Gallery from "../Gallery/Gallery";
import Title from "../../ui/Title";
import Background from "../../ui/SectionBackground";
import SectionWrapper from "../../ui/SectionWrapper";
import image from "../../../public/images/GalleryBg.webp";

const GallerySection = () => {
  return (
    <SectionWrapper id="gallery" className={`px-[20px]`}>
      <Background image={image} />
      <div className="container mx-auto md:flex md:justify-center lg:justify-start">
        <Title>
          Our <span className="font-medium">gallery</span>
        </Title>
      </div>
      <Gallery />
    </SectionWrapper>
  );
};

export default GallerySection;
