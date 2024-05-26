import { useCallback } from "react";
import { BlockWrapper } from "../../common/block-wrapper";
import TITLE4 from "../../assets/block4/title.webp";
import MONKEY4 from "../../assets/block4/monkey.webp";
import MONKEY42 from "../../assets/block4/monkey2.webp";
import PIE from "../../assets/block4/pie.webp";
import { Img } from "react-image";

const Block4 = () => {
  const getBlock = useCallback(() => {
    return (
      <div className="relative min-h-screen flex-col lg:gap-2 w-full lg:pb-24 flex justify-start lg:justify-between items-center">
        <Img
          src={TITLE4}
          alt="title"
          className="h-full w-auto aspect-auto max-h-[10vh] xl:max-h-[15vh] mt-12 z-50"
        />
        <div className="w-1/2 lg:w-[40%] absolute bottom-0 left-0 z-50">
          <Img
            src={MONKEY4}
            alt="monkey"
            className="h-auto w-full aspect-auto pl-2 -translate-x-[10%]"
          />
        </div>
        <div className="w-1/2 lg:w-[40%] absolute bottom-0 right-0 z-50">
          <Img
            src={MONKEY42}
            alt="monkey"
            className="h-auto w-full aspect-auto pl-2 translate-x-[10%]"
          />
        </div>
        <div className="w-full my-auto lg:w-[40%] flex flex-col h-full lg:h-[50vh] gap-6 lg:gap-10 px-6 justify-center text-center items-center relative text-3xl md:text-4xl 2xl:text-5xl">
          <div className="w-[98%] absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[18%] z-0">
            <Img src={PIE} alt="pie" className="w-full pie" />
          </div>
          <p
            className="text-[#FFD700] z-50 font-extrabold"
            style={{
              WebkitTextStrokeColor: "black",
              WebkitTextStrokeWidth: "4px",
            }}
          >
            TOTAL SUPPLY 1,000,000,000 $KONGE
          </p>
          <p
            className="text-[#FFD700] z-50"
            style={{
              WebkitTextStrokeColor: "black",
              WebkitTextStrokeWidth: "4px",
            }}
          >
            ??% BURN
          </p>
          <p
            className="text-[#FFD700] z-50"
            style={{
              WebkitTextStrokeColor: "black",
              WebkitTextStrokeWidth: "4px",
            }}
          >
            3% TEAM
          </p>
          <p
            className="text-[#FFD700] z-50"
            style={{
              WebkitTextStrokeColor: "black",
              WebkitTextStrokeWidth: "4px",
            }}
          >
            7% AIRDROP
          </p>
          <p
            className="text-[#FFD700] z-50"
            style={{
              WebkitTextStrokeColor: "black",
              WebkitTextStrokeWidth: "4px",
            }}
          >
            7% PRESALE
          </p>
        </div>
      </div>
    );
  }, []);

  return <BlockWrapper bg="bg-[#333333]">{getBlock()}</BlockWrapper>;
};

export default Block4;
