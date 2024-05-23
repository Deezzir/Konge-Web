import { BlockWrapper } from "../common/block-wrapper";
import { useCallback } from "react";

export const Block4 = () => {
  const getBlock = useCallback(() => {
    return (
      <>
        <div className="flex max-w-screen-3xl flex-row gap-8 lg:gap-12 p-4 md:p-16 justify-center items-center"></div>
      </>
    );
  }, []);

  return <BlockWrapper bg="bg-[#333333]">{getBlock()}</BlockWrapper>;
};
