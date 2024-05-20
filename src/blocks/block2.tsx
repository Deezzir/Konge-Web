import { BlockWrapper } from "../common/block-wrapper";
import img1 from "../assets/block2/sqr0.webp";
import img2 from "../assets/block2/sqr1.webp";
import img3 from "../assets/block2/sqr2.webp";
import img4 from "../assets/block2/sqr3.webp";
import img5 from "../assets/block2/sqr4.webp";
import img6 from "../assets/block2/sqr5.webp";
import img7 from "../assets/block2/sqr6.webp";
import img8 from "../assets/block2/sqr7.webp";
import { hoverScale } from "./block3";
import { Img } from "react-image";
import { useCallback } from "react";

const imgClass =
  "object-contain lg:h-auto rounded-xl drop-shadow-xl " + hoverScale;

export const Block2 = () => {
  const getImages = useCallback(() => {
    return (
      <>
        <Img className={imgClass} src={img1} loading="eager" />

        <Img className={imgClass} src={img2} loading="eager" />

        <Img className={imgClass} src={img3} loading="eager" />

        <Img className={imgClass} src={img4} loading="eager" />

        <Img className={imgClass} src={img5} loading="eager" />

        <Img className={imgClass} src={img6} loading="eager" />

        <Img className={imgClass} src={img7} loading="eager" />

        <Img className={imgClass} src={img8} loading="eager" />
      </>
    );
  }, []);

  return (
    <>
      <BlockWrapper>
        <div className="grid lg:flex-row grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-16 justify-center items-center w-full">
          {getImages()}
        </div>
      </BlockWrapper>
    </>
  );
};
