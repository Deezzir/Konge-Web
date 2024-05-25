export const Footer = (props: { customClass?: string }) => {
  return (
    <>
      <footer className={"px-8 py-4 text-center " + props.customClass}>
        <p className="font-bold text-2xl">$KONGE &copy; 2024 - forever</p>
      </footer>
    </>
  );
};
