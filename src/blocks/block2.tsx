import BUTTON2 from "../assets/block2/button.webp";
import GIF2 from "../assets/block2/gif-placeholder.png";
import TITLE2 from "../assets/block2/title.webp";
import { Img } from "react-image";
import { BlockWrapper } from "../common/block-wrapper";
import { useCallback } from "react";

export const Block2 = () => {
  const getBlock = useCallback(() => {
    return (
      <div className="flex max-w-screen-3xl flex-col lg:flex-row gap-4 lg:gap-12 p-4 md:p-16 justify-center items-center">
        <div className="flex h-full flex-col w-full lg:w-1/2 justify-evenly items-center gap-8 lg:gap-16 p-8">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center text-[#FFD700] leading-[1.3]">
            <span className="text-3xl md:text-4xl 2xl:text-5xl">KONGE</span> is
            A CHAD type ape. Do nor compare it. We build different...
          </h2>
          <a className="hover:scale-[1.03] transition-transform duration-500 cursor-pointer flex justify-center">
            <Img
              src={BUTTON2}
              alt="button2"
              className="h-full aspect-auto w-full lg:w-[60%]"
            />
          </a>
        </div>
        <div className="flex w-full h-full lg:w-1/2 p-8 flex-col justify-center items-center">
          <Img
            src={GIF2}
            alt="gif2"
            className="max-h-[40vh] md:max-h-[70vh] h-auto w-full aspect-auto border-8 border-[#FFD700]"
          />
          <Img
            src={TITLE2}
            alt="title2"
            className="w-[80%] aspect-auto -translate-y-1/2"
          />
        </div>
      </div>
    );
  }, []);

  return <BlockWrapper bg="bg-[#333333]">{getBlock()}</BlockWrapper>;
};
