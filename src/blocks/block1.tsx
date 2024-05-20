import { BlockWrapper } from "../common/block-wrapper";
import { Links } from "../common/links";
import WAF from "../assets/waf.png";

export const Block1 = () => {
  return (
    <>
      <BlockWrapper>
        <div className="flex flex-col justify-between items-center">
          <Links customClass="mt-2" />
          <div className="flex flex-row gap-16 items-center justify-between text-4xl md:text-6xl font-bold text-center">
            <h3>WAF</h3>
            <img
              src={WAF}
              alt="logo"
              className="h-16 w-auto md:h-[60vh] rounded-2xl"
            />
            <h3>WAF</h3>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              accusamus illo ab quia aspernatur, reiciendis nulla possimus odit
              porro incidunt quisquam soluta voluptas. Obcaecati veniam nisi
              accusantium earum ad sapiente.
            </h2>
          </div>
        </div>
      </BlockWrapper>
    </>
  );
};
