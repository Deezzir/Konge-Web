import { BlockWrapper } from "../common/block-wrapper";
import { Links } from "../common/links";
import WAF from "../assets/waf.png";

export const Block1 = () => {
  return (
    <>
      <BlockWrapper>
        <Links customClass="" />
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-16 items-center justify-between text-4xl md:text-6xl font-bold text-center">
          <h3>WAF</h3>
          <img
            src={WAF}
            alt="logo"
            className="w-full h-auto xl:w-auto xl:h-[60vh] rounded-2xl flipping-image"
          />
          <h3>WAF</h3>
        </div>
        <div>
          <h2 className="text-xl xl:text-4xl font-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            accusamus illo ab quia aspernatur, reiciendis nulla possimus odit
            porro incidunt quisquam soluta voluptas. Obcaecati veniam nisi
            accusantium earum ad sapiente.
          </h2>
        </div>
      </BlockWrapper>
    </>
  );
};
