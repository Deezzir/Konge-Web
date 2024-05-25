import { Suspense, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
// import { Block1 } from "./block1";
// import { Block2 } from "./block2";
// import { Block3 } from "./block3";
// import { Block4 } from "./block4";
// import { Block5 } from "./block5";
import { Footer } from "../../common/footer";
import DIVIDER from "../../assets/divider.webp";
import { Img } from "react-image";
import SWAY from "../../assets/block1/sway.webp";
import React from "react";

const Block1 = React.lazy(() => import("./block1"));
const Block2 = React.lazy(() => import("./block2"));
const Block3 = React.lazy(() => import("./block3"));
const Block4 = React.lazy(() => import("./block4"));
const Block5 = React.lazy(() => import("./block5"));

export const Landing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="top-0 right-[8%] -translate-y-[10px] absolute">
          <Img
            src={SWAY}
            alt="sway"
            className="h-[25vh] w-auto aspect-auto sway-monkey"
          />
        </div>
        <div className="loader text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <Block1 />
      <Marquee speed={15} autoFill direction={"right"}>
        <div className="ps-2 font-bold uppercase text-2xl border-y-4 border-black bg-[#FFD700]">
          $KONGE $KONGE $KONGE $KONGE $KONGE $KONGE $KONGE $KONGE $KONGE $KONGE
          $KONGE
        </div>
      </Marquee>
      <Block2 />
      <Img src={DIVIDER} className="h-1/2" />
      <Block3 />
      <Img src={DIVIDER} className="h-1/2" />
      <Block4 />
      <Img src={DIVIDER} className="h-1/2" />
      <Block5 />
      <Footer />
    </div>
  );
};
