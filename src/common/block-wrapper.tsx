export const BlockWrapper = (props: any) => {
  return (
    <div className="relative min-h-screen w-full flex p-4 md:p-16">
      {props.children}
    </div>
  );
};
