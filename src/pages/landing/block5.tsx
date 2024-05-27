import TITLE5 from "../../assets/block5/title.webp";
import MONKEY5 from "../../assets/block5/monkey.webp";
import BANANA5 from "../../assets/block5/banana.webp";
import { useCallback } from "react";
import { Img } from "react-image";
import { BlockWrapper } from "../../common/block-wrapper";
import { MovingImg } from "../../common/moving-img";

export const Block5 = () => {
  const getBlock = useCallback(() => {
    return (
      <div className="relative min-h-screen mt-8 lg:mt-0 flex-col gap-8 md:gap-6 w-full flex justify-between items-center">
        <MovingImg
          imgPath={BANANA5}
          alt={"banana"}
          customClassWrapper={"absolute top-16 left-[5%] z-0 xl:block hidden"}
          customClassImg={"h-[30vh] object-contain img-hor rotate-[-15deg]"}
          ty={10}
          tx={2}
          tz={5}
        />
        <Img
          src={TITLE5}
          alt="title"
          className="w-auto h-full aspect-auto max-h-[10vh] 2xl:max-h-[15vh] mt-12"
        />
        <MovingImg
          imgPath={BANANA5}
          alt={"banana"}
          customClassWrapper={"absolute top-2 right-[5%] z-0 xl:block hidden"}
          customClassImg={"h-[20vh] object-contain img-hor rotate-[15deg]"}
          ty={16}
          tx={5}
          tz={4}
        />
        <MovingImg
          imgPath={BANANA5}
          alt={"banana"}
          customClassWrapper={"absolute top-1/4 right-1/3 z-0 xl:block hidden"}
          customClassImg={"h-[20vh] object-contain rotate-[40deg]"}
          ty={6}
          tx={8}
          tz={8}
        />
        <div className="w-full flex flex-col xl:flex-row gap-12 lg:gap-1 items-center justify-between">
          <div className="w-full lg:w-[55%] flex flex-col h-full lg:h-[50vh] gap-6 lg:gap-12  xl:ml-24 px-6 justify-center text-center xl:text-left items-center xl:items-start relative text-3xl md:text-4xl 2xl:text-5xl">
            <p
              className="text-[#FFD700] z-50"
              style={{
                WebkitTextStrokeColor: "black",
                WebkitTextStrokeWidth: "4px",
              }}
            >
              • Sign-Up 48H before launch
            </p>
            <p
              className="text-[#FFD700] z-50"
              style={{
                WebkitTextStrokeColor: "black",
                WebkitTextStrokeWidth: "4px",
              }}
            >
              • Eligible twitter required
            </p>
            <p
              className="text-[#FFD700] z-50"
              style={{
                WebkitTextStrokeColor: "black",
                WebkitTextStrokeWidth: "4px",
              }}
            >
              • drop 1 hour after launch
            </p>
            <p
              className="text-[#FFD700] z-50"
              style={{
                WebkitTextStrokeColor: "black",
                WebkitTextStrokeWidth: "4px",
              }}
            >
              • estimated value $100
            </p>
            <p
              className="text-[#FFD700] z-50"
              style={{
                WebkitTextStrokeColor: "black",
                WebkitTextStrokeWidth: "4px",
              }}
            >
              • 7% to 777 people
            </p>
          </div>
          <div className="relative w-full lg:w-[35%] flex justify-center lg:justify-end items-center">
            <Img
              src={MONKEY5}
              alt="monkey1"
              className="pl-2 h-full aspect-auto max-h-[50vh] lg:max-h-[75vh]"
            />
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

export default Block5;
