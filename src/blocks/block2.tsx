import { BlockWrapper } from "../common/block-wrapper";
import img1 from "../assets/block2/image.png";

const imgClass = "object-contain lg:h-auto rounded-xl";

export const Block2 = () => {
  return (
    <>
      <BlockWrapper>
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 justify-center items-center w-full">
          <div className="lg:w-1/4 w-full flex justify-center">
            <img className={imgClass} src={img1} />
          </div>
          <div className="lg:w-1/4 w-full flex justify-center">
            <img className={imgClass} src={img1} />
          </div>
          <div className="lg:w-1/4 w-full flex justify-center">
            <img className={imgClass} src={img1} />
          </div>
          <div className="lg:w-1/4 w-full flex justify-center">
            <img className={imgClass} src={img1} />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 justify-center items-center w-full">
          <div className="lg:w-1/4 w-full flex justify-center">
            <img className={imgClass} src={img1} />
          </div>
          <div className="lg:w-1/4 w-full flex justify-center">
            <img className={imgClass} src={img1} />
          </div>
          <div className="lg:w-1/4 w-full flex justify-center">
            <img className={imgClass} src={img1} />
          </div>
          <div className="lg:w-1/4 w-full flex justify-center">
            <img className={imgClass} src={img1} />
          </div>
        </div>
      </BlockWrapper>
    </>
  );
};
