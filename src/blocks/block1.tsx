import { BlockWrapper } from "../common/block-wrapper";
import { Links } from "../common/links";
import MAIN from "../assets/main.webp";
import { useCallback } from "react";
import { Img } from "react-image";

export const Block1 = () => {
  const getBlock = useCallback(() => {
    return (
      <>
        <h1 className="font-bold text-3xl select-all">
          Willem DaChoice : $WILLEM
        </h1>
        <Links customClass="" />
        <h1 className="font-bold text-3xl">
          CA: <span className="select-all">Coming</span>
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-16 items-center justify-between">
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <Img
              src={MAIN}
              alt="logo"
              className={
                "h-full aspect-auto max-h-[60vh] transition duration-300 rounded-xl"
              }
            />
          </div>
          <div className="w-full flex flex-col md:w-1/2 text-3xl font-bold text-center gap-8 justify-evenly items-center">
            <h2>There are only two ways:</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
              <p className="bg-white border-2 border-black rounded-2xl p-2 w-full md:w-1/2">
                HODL and get to the millions.
              </p>
              <p className="bg-white border-2 border-black rounded-2xl p-2 w-full  md:w-1/2">
                JEET and cry later about it.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }, []);

  return (
    <>
      <BlockWrapper>{getBlock()}</BlockWrapper>
    </>
  );
};
