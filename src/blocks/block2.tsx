import { BlockWrapper } from "../common/block-wrapper";
import img1 from "../assets/block2/sqr0.webp";
import img2 from "../assets/block2/sqr1.webp";
import img3 from "../assets/block2/sqr2.webp";
import img4 from "../assets/block2/sqr3.webp";
import img5 from "../assets/block2/sqr4.webp";
import img6 from "../assets/block2/sqr5.webp";
import { hoverScale } from "./block3";

const imgClass =
  "object-contain lg:h-auto rounded-xl drop-shadow-xl " + hoverScale;

export const Block2 = () => {
  return (
    <>
      <BlockWrapper>
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 justify-center items-center w-full">
          <div className="lg:w-1/3 w-full flex justify-center">
            <img className={imgClass} src={img1} />
          </div>
          <div className="lg:w-1/3 w-full flex justify-center">
            <img className={imgClass} src={img2} />
          </div>
          <div className="lg:w-1/3 w-full flex justify-center">
            <img className={imgClass} src={img3} />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 justify-center items-center w-full">
          <div className="lg:w-1/3 w-full flex justify-center">
            <img className={imgClass} src={img4} />
          </div>
          <div className="lg:w-1/3 w-full flex justify-center">
            <img className={imgClass} src={img5} />
          </div>
          <div className="lg:w-1/3 w-full flex justify-center">
            <img className={imgClass} src={img6} />
          </div>
        </div>
      </BlockWrapper>
    </>
  );
};
