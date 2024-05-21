import { BlockWrapper } from "../common/block-wrapper";
import { Links } from "../common/links";
import MAIN from "../assets/main.webp";
import { useCallback } from "react";
import { Img } from "react-image";

export const Block1 = () => {
  const getBlock = useCallback(() => {
    return (
      <>
        <h1 className="font-bold text-2xl select-all">
          Willem DaChoice : $WILLEM
        </h1>
        <Links customClass="" />
        <h1 className="font-bold text-2xl">
          CA: <span className="select-all">Coming</span>
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-16 items-center justify-between text-4xl md:text-6xl font-bold text-center">
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <Img
              src={MAIN}
              alt="logo"
              className={
                "h-full aspect-auto max-h-[60vh] transition duration-300 rounded-xl"
              }
            />
          </div>
          <div className="flex flex-col w-1/2 h-[60vh] text-xl md:text-3xl font-bold text-center justify-evenly items-center">
            <h2>
              Have a chance to overtake the idea of WIF. Its not just another
              boring remake of WIF, it could be a competitor of it. $WAF is a
              cute cat with unlimited meme potential in its concept.
            </h2>
            <div className="flex flex-row justify-between items-center gap-16">
              <p>Blablaafssagagsagsag</p>
              <p>Blablaafssagagsagsag</p>
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
