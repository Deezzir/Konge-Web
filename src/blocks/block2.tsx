import { motion } from "framer-motion";

import Marquee from "react-fast-marquee";
import { Img } from "react-image";

export const hoverScale = "hover:scale-[0.99] transform transition duration-y";

export const Block2 = () => {
  const getImages = () => {
    return (
      <>
        <Marquee speed={15} autoFill direction={"left"}>
          <div className="flex flex-row gap-8 h-[25vh] ms-8">
            {[...Array(7)].map((_, index: any) => {
              return (
                <Img
                  className={
                    "w-auto h-auto rounded-2xl select-none object-contain " +
                    hoverScale
                  }
                  src={"../assets/block2/sqr0.webp"}
                  key={index}
                />
              );
            })}
          </div>
        </Marquee>
        <Marquee speed={25} autoFill direction={"right"}>
          <div className="flex flex-row gap-8 h-[25vh] ms-8">
            {[...Array(7)].map((_, index: any) => {
              return (
                <Img
                  className={
                    "w-auto h-auto rounded-2xl select-none object-contain " +
                    hoverScale
                  }
                  src={"../assets/block2/sqr0.webp"}
                  key={index}
                />
              );
            })}
          </div>
        </Marquee>
        <Marquee speed={20} autoFill direction={"left"}>
          <div className="flex flex-row gap-8 h-[25vh] ms-8">
            {[...Array(7)].map((_, index: any) => {
              return (
                <Img
                  className={
                    "w-auto h-auto rounded-2xl select-none object-contain " +
                    hoverScale
                  }
                  src={"../assets/block2/sqr0.webp"}
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
            {[...Array(7)].map((_, index: any) => {
              return (
                <Img
                  className={
                    "w-auto h-auto rounded-2xl select-none object-contain " +
                    hoverScale
                  }
                  src={"../assets/block2/sqr0.webp"}
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
