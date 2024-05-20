import { BlockWrapper } from "../common/block-wrapper";
import img from "../assets/block3/image.png";
const pClass = "text-4xl";

export const Block3 = () => {
  return (
    <>
      <BlockWrapper>
        <div className="flex w-full lg:flex-row flex-col-reverse gap-16">
          <div className="lg:w-1/2 w-full flex flex-col justify-evenly gap-16 items-center">
            <p className={pClass}>1) Lorem impus impus impus</p>
            <p className={pClass}>2) Lorem impus impus impus</p>
            <p className={pClass}>3) Lorem impus impus impus</p>
            <p className={pClass}>4) Lorem impus impus impus</p>
          </div>
          <div className="lg:w-1/2 w-full flex-col flex justify-end items-end gap-8">
            <img className="w-full lg:w-10/12 rounded-lg" src={img} />
            <a className="w-full lg:w-10/12 rounded-xl text-white px-4 py-4 cursor-pointer text-center bg-[#B61F1F]">
              Press button
            </a>
          </div>
        </div>
      </BlockWrapper>
    </>
  );
};
