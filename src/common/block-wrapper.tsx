export const BlockWrapper = (props: any) => {
  return (
    <div className="relative min-h-screen flex-col gap-8 lg:gap-16 w-full flex p-4 md:p-16 justify-center max-w-screen-2xl items-center">
      {props.children}
    </div>
  );
};
