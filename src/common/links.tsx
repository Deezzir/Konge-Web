import { DEXSCREENER, JUPITER, RAYDIUM, TELEGRAM, TWITTER } from "./urls";
import { DexscreenerIcon } from "./icons/dexscreener-icon";
import { JupiterIcon } from "./icons/jupiter-icon";
import { RaydiumIcon } from "./icons/raydium-icon";
import { TgIcon } from "./icons/tg-icon";
import { XIcon } from "./icons/x-icon";

const buttonClass =
  "select-none font-bold cursor-pointer rounded-full flex flex-row content-center items-center transform transition duration-500 hover:scale-105 z-50";

const iconClass = "w-12 h-12 md:w-14 md:h-14 fill-black";

type CheckerProps = {
  val: string;
  children: React.ReactNode;
};

const Checker = (props: CheckerProps) => {
  return <>{props.val.length !== 0 && props.children}</>;
};

export const Links = (props: { customClass: string }) => {
  return (
    <div
      className={
        "w-full z-50 flex gap-8 flex-row flex-wrap max-w-screen-2xl ms-auto justify-center items-center " +
        props.customClass
      }
    >
      <Checker val={TWITTER}>
        <a
          target="_blank"
          rel="noreferrer"
          href={TWITTER}
          className={buttonClass}
        >
          <XIcon iconClass={iconClass} />
        </a>
      </Checker>
      <Checker val={TELEGRAM}>
        <a
          target="_blank"
          rel="noreferrer"
          href={TELEGRAM}
          className={buttonClass}
        >
          <TgIcon iconClass={iconClass} />
        </a>
      </Checker>
      <Checker val={DEXSCREENER}>
        <a
          target="_blank"
          rel="noreferrer"
          href={DEXSCREENER}
          className={buttonClass}
        >
          <DexscreenerIcon iconClass={iconClass} />
        </a>
      </Checker>
      <Checker val={RAYDIUM}>
        <a
          target="_blank"
          rel="noreferrer"
          href={RAYDIUM}
          className={buttonClass}
        >
          <RaydiumIcon iconClass={iconClass} />
        </a>
      </Checker>
      <Checker val={JUPITER}>
        <a
          target="_blank"
          rel="noreferrer"
          href={JUPITER}
          className={buttonClass}
        >
          <JupiterIcon iconClass={iconClass} />
        </a>
      </Checker>
    </div>
  );
};
