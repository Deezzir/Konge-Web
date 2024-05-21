import { motion } from "framer-motion";
import { useCallback } from "react";

import Marquee from "react-fast-marquee";
import { Img } from "react-image";

export const hoverScale = "hover:scale-[0.99] transform transition duration-y";

function createArrayFromNtoM(n: number, m: number) {
  let array = [];
  for (let i = n; i <= m; i++) {
    array.push(i);
  }
  return array;
}

export const Block2 = () => {
  const arr1 = useCallback(() => {
    return createArrayFromNtoM(1, 13);
  }, []);
  const arr2 = useCallback(() => {
    return createArrayFromNtoM(14, 27);
  }, []);
  const arr3 = useCallback(() => {
    return createArrayFromNtoM(28, 41);
  }, []);
  const arr4 = useCallback(() => {
    return createArrayFromNtoM(42, 53);
  }, []);

  const getImages = () => {
    return (
      <>
        <Marquee speed={15} autoFill direction={"left"}>
          <div className="flex flex-row gap-8 h-[25vh] ms-8">
            {arr1().map((val: number, index: any) => {
              return (
                <Img
                  className={
                    "w-auto h-auto rounded-2xl select-none object-contain " +
                    hoverScale
                  }
                  src={`./block2/will${val}.webp`}
                  key={index}
                />
              );
            })}
          </div>
        </Marquee>
        <Marquee speed={25} autoFill direction={"right"}>
          <div className="flex flex-row gap-8 h-[25vh] ms-8">
            {arr2().map((val: number, index: any) => {
              return (
                <Img
                  className={
                    "w-auto h-auto rounded-2xl select-none object-contain " +
                    hoverScale
                  }
                  src={`./block2/will${val}.webp`}
                  key={index}
                />
              );
            })}
          </div>
        </Marquee>
        <Marquee speed={20} autoFill direction={"left"}>
          <div className="flex flex-row gap-8 h-[25vh] ms-8">
            {arr3().map((val: number, index: any) => {
              return (
                <Img
                  className={
                    "w-auto h-auto rounded-2xl select-none object-contain " +
                    hoverScale
                  }
                  src={`./block2/will${val}.webp`}
                  key={index}
                />
              );
            })}
          </div>
        </Marquee>
        <Marquee
          className="flex w-full"
          speed={17}
          autoFill
          direction={"right"}
        >
          <div className="flex flex-row gap-8 h-[25vh] ms-8">
            {arr4().map((val: number, index: any) => {
              return (
                <Img
                  className={
                    "w-auto h-auto rounded-2xl select-none object-contain " +
                    hoverScale
                  }
                  src={`./block2/will${val}.webp`}
                  key={index}
                />
              );
            })}
          </div>
        </Marquee>
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{
        duration: 2,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col gap-8 min-h-screen w-full"
    >
      {getImages()}
    </motion.div>
  );
};
