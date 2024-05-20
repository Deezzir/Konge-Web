import { BlockWrapper } from "../common/block-wrapper";
import img from "../assets/waf.webp";
import { useCallback } from "react";
import { TELEGRAM } from "../common/urls";
import { Img } from "react-image";

const pClass = "text-4xl uppercase font-bold md:text-left text-center";
export const hoverScale = "hover:scale-[1.01] transform transition duration-y";

export const Block3 = () => {
  const onPress = useCallback(() => {
    window.open(TELEGRAM, "_blank");
  }, []);

  const getBlock = useCallback(() => {
    return (
      <>
        <div className="flex w-full lg:flex-row flex-col-reverse gap-16">
          <div className="lg:w-[55%] w-full flex flex-col justify-center gap-16 items-center lg:items-start">
            <p className={pClass}>1) launching at pump fun</p>
            <p className={pClass}>2) burning 13%, prepaying dex</p>
            <p className={pClass}>3) creating all socials </p>
            <p className={pClass}>4) pumping together as a community</p>
          </div>
          <div className="lg:w-[45%] w-full flex-col flex justify-end items-end gap-8">
            <Img
              className={
                "w-full lg:w-10/12 rounded-lg drop-shadow-xl " + hoverScale
              }
              src={img}
            />
            <a
              onClick={onPress}
              className="cursor-pointer text-red border-none text-center justify-center align-middle flex items-center relative py-4 px-2 w-full lg:w-10/12 overflow-hidden border bg-[#B61F1F] rounded-2xl text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
            >
              <p className="z-10 bg-transparent font-bold">TELEGRAM</p>
            </a>
          </div>
        </div>
      </>
    );
  }, [onPress]);

  return (
    <>
      <BlockWrapper>{getBlock()}</BlockWrapper>
    </>
  );
};
