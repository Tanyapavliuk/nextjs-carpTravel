import Gallery from "../Gallery/Gallery";
import Title from "../../ui/Title";

import style from "./Gallery.module.css";

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className={`${style.galleryBg} py-10 md:py-14 lg:py-[104px]`}
    >
      <div className="container mx-auto md:flex md:justify-center lg:justify-start">
        <Title>
          Our <span className="font-medium">gallery</span>
        </Title>
      </div>
      <Gallery />
    </section>
  );
};

export default GallerySection;
