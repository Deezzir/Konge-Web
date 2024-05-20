import { BlockWrapper } from "../common/block-wrapper";
import img from "../assets/block3/image.png";
const pClass = "lg:text-4xl text-3xl";

export const Block3 = () => {
  return (
    <>
      <BlockWrapper>
        <div className="flex w-full lg:flex-row flex-col-reverse gap-16">
          <div className="lg:w-1/2 w-full flex flex-col justify-evenly gap-8 items-center">
            <p className={pClass}>1) Lorem impus impus impus</p>
            <p className={pClass}>2) Lorem impus impus impus</p>
            <p className={pClass}>3) Lorem impus impus impus</p>
            <p className={pClass}>4) Lorem impus impus impus</p>
          </div>
          <div className="lg:w-1/2 w-full flex justify-end items-end">
            <img className="w-full lg:w-10/12" src={img} />
          </div>
        </div>
      </BlockWrapper>
    </>
  );
};
