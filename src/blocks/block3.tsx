import { BlockWrapper } from "../common/block-wrapper";

export const Block3 = () => {
  const getBlock = () => {
    return (
      <>
        <div className="flex max-w-screen-3xl flex-row gap-8 lg:gap-12 p-4 md:p-16 justify-center items-center"></div>
      </>
    );
  };

  return <BlockWrapper>{getBlock()}</BlockWrapper>;
};
