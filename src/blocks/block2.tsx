import { BlockWrapper } from "../common/block-wrapper";
import img1 from "../assets/block2/image.png";

const imgClass = "object-contain w-[34vh]";

export const Block2 = () => {
  return (
    <>
      <BlockWrapper>
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 justify-center items-center">
          <img className={imgClass} src={img1} />
          <img className={imgClass} src={img1} />
          <img className={imgClass} src={img1} />
          <img className={imgClass} src={img1} />
        </div>
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 justify-center items-center">
          <img className={imgClass} src={img1} />
          <img className={imgClass} src={img1} />
          <img className={imgClass} src={img1} />
          <img className={imgClass} src={img1} />
        </div>
      </BlockWrapper>
    </>
  );
};
