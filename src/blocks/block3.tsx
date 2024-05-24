import { useCallback } from "react";
import { BlockWrapper } from "../common/block-wrapper";
import BUTTON3 from "../assets/block3/button.webp";
import TITLE3 from "../assets/block3/title.webp";
import BANNER3 from "../assets/block3/banner.webp";
import MONKEY3 from "../assets/block3/monkey.webp";
import { Img } from "react-image";
import CLOUD1 from "../assets/block3/cloud1.webp";
import CLOUD2 from "../assets/block3/cloud2.webp";
import CLOUD3 from "../assets/block3/cloud3.webp";
import CLOUD4 from "../assets/block3/cloud4.webp";

export const Block3 = () => {
  const getBlock = useCallback(() => {
    return (
      <div className="relative min-h-screen mt-0 flex-col gap-8 md:gap-6 w-full flex justify-between items-center">
        <div className="flex md:flex-row justify-center items-center w-full gap-6 2xl:gap-12">
          <Img
            src={CLOUD1}
            alt="cloud"
            className="h-full aspect-auto max-h-[7vh] xl:max-h-[10vh] mt-12 -translate-y-12 hidden lg:block"
          />
          <Img
            src={CLOUD2}
            alt="cloud"
            className="h-full aspect-auto max-h-[7vh] xl:max-h-[10vh] mt-12 translate-y-10 hidden lg:block"
          />
          <Img
            src={TITLE3}
            alt="title"
            className="w-auto h-full aspect-auto max-h-[10vh] 2xl:max-h-[15vh] mt-12"
          />
          <Img
            src={CLOUD3}
            alt="cloud"
            className="h-full aspect-auto max-h-[7vh] xl:max-h-[10vh] mt-12 translate-y-10 hidden lg:block"
          />
          <Img
            src={CLOUD4}
            alt="cloud"
            className="h-full aspect-auto max-h-[7vh] xl:max-h-[10vh] mt-12 -translate-y-12 hidden lg:block"
          />
        </div>
        <div className="w-full flex flex-col-reverse xl:flex-row gap-12 lg:gap-1 items-center justify-between">
          <div className="relative w-full lg:w-[45%] flex justify-center lg:justify-start items-center">
            <Img
              src={MONKEY3}
              alt="monkey3"
              className="pl-2 w-full aspect-auto"
            />
          </div>
          <div className="w-full flex flex-col h-full lg:h-[50vh] md:w-2/3 xl:w-[45%] mr-0 xl:mr-16 gap-8 px-6 justify-center items-center relative">
            <div className="relative flex h-full w-full md:w-2/3 lg:w-full p-8">
              <Img
                src={BANNER3}
                alt="banner3"
                className="w-full h-full absolute top-0 left-0 z-0"
              />
              <div className="w-full flex flex-col justify-center md:pl-6 items-start z-50">
                <ul className="flex flex-col space-y-2 md:space-y-6 uppercase md:text-left text-2xl md:text-3xl 2xl:text-4xl font-bold">
                  <li>• Doing airdrop</li>
                  <li>• Launching at pump.fun</li>
                  <li>• BULLING PONKE</li>
                  <li>• Mooning konge</li>
                </ul>
              </div>
            </div>
            <a
              className="hover:scale-[1.03] transition-transform duration-500 cursor-pointer flex justify-center"
              href={"https://pump.fun"}
              target="_blank"
              rel="noreferrer"
            >
              <Img
                src={BUTTON3}
                alt="button"
                className="max-h-[30vh] h-auto w-2/3 aspect-auto"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }, []);

  return <BlockWrapper>{getBlock()}</BlockWrapper>;
};
