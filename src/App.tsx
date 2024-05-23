import Marquee from "react-fast-marquee";
import { Block1 } from "./blocks/block1";
import { Block2 } from "./blocks/block2";
import { Footer } from "./blocks/footer";
import { Block3 } from "./blocks/block3";
import { Block4 } from "./blocks/block4";

function App() {
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
      <Block3 />
      <Block4 />
      <Footer />
    </div>
  );
}

export default App;
