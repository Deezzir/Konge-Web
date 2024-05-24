import { Links } from "../common/links";
import { BUY_LINK } from "../common/urls";
import TITLE1 from "../assets/block1/title.webp";
import MONKEY1 from "../assets/block1/main.webp";
import BUTTON1 from "../assets/block1/button.webp";
import { useCallback } from "react";
import { Img } from "react-image";
import { BlockWrapper } from "../common/block-wrapper";

export const Block1 = () => {
  const getBlock = useCallback(() => {
    return (
      <div className="relative min-h-screen mt-8 lg:mt-4 flex-col gap-8 md:gap-4 w-full flex justify-between items-center">
        <Img
          src={TITLE1}
          alt="title1"
          className="h-full w-auto aspect-auto max-h-[15vh] xl:max-h-[25vh]"
        />
        <div className="w-full flex flex-col-reverse xl:flex-row gap-12 lg:gap-1 items-center justify-between">
          <div className="relative w-full lg:w-[45%] flex justify-center lg:justify-start items-center">
            <Img
              src={MONKEY1}
              alt="monkey1"
              className="pl-2 h-full aspect-auto max-h-[50vh] lg:max-h-[75vh]"
            />
          </div>
          <div className="w-full flex flex-col h-full lg:h-[40vh] lg:w-[55%] text-3xl md:text-4xl 2xl:text-5xl font-bold text-center mr-0 2xl:mr-16 md:gap-12 gap-8 px-12 justify-between items-center">
            <h2>
              <span className="text-4xl md:text-5xl 2xl:text-6xl">KONGE</span>{" "}
              is a chad gambler with bulling issues on the Solana network.
            </h2>
            <div className="flex flex-col 2xl:flex-row justify-between items-center gap-8 xl:gap-16">
              <a
                className="hover:scale-[1.03] transition-transform duration-500 cursor-pointer"
                href={BUY_LINK}
                target="_blank"
                rel="noreferrer"
              >
                <Img
                  src={BUTTON1}
                  alt="button1"
                  className="2xl:max-h-[30vh] max-h-[15vh] w-full h-auto aspect-auto"
                />
              </a>
              <Links customClass="" />
            </div>
          </div>
        </div>
      </div>
    );
  }, []);

  return (
    <>
      <BlockWrapper>{getBlock()}</BlockWrapper>
    </>
  );
};
