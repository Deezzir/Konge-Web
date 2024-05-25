import Marquee from "react-fast-marquee";
import { Block1 } from "./block1";
import { Block2 } from "./block2";
import { Footer } from "../../common/footer";
import { Block3 } from "./block3";
import { Block4 } from "./block4";
import { Block5 } from "./block5";
import DIVIDER from "../../assets/divider.webp";
import { Img } from "react-image";

export const Landing = () => {
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
