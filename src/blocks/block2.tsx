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

const imgClass =
  "object-contain lg:h-auto rounded-xl drop-shadow-xl " + hoverScale;

export const Block2 = () => {
  return (
    <>
      <BlockWrapper>
        <div className="grid lg:flex-row grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-16 justify-center items-center w-full">
          <img className={imgClass} src={img1} />

          <img className={imgClass} src={img2} />

          <img className={imgClass} src={img3} />

          <img className={imgClass} src={img4} />

          <img className={imgClass} src={img5} />

          <img className={imgClass} src={img6} />

          <img className={imgClass} src={img7} />

          <img className={imgClass} src={img8} />
        </div>
      </BlockWrapper>
    </>
  );
};
