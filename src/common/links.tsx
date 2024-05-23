import { DEXSCREENER, JUPITER, RAYDIUM, TELEGRAM, TWITTER } from "./urls";
import { DexscreenerIcon } from "./icons/dexscreener-icon";
import { JupiterIcon } from "./icons/jupiter-icon";
import { RaydiumIcon } from "./icons/raydium-icon";
import { TgIcon } from "./icons/tg-icon";
import { XIcon } from "./icons/x-icon";

const buttonClass =
  "select-none font-bold cursor-pointer rounded-full flex flex-row content-center items-center transform transition duration-500 hover:scale-105 z-50";

const iconClass = "w-12 h-12 md:w-[4vw] md:h-[6vh] fill-black";

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
        "w-full z-50 flex gap-8 flex-wrap lg:flex-nowrap flex-row ms-auto justify-center items-center relative " +
        props.customClass
      }
    >
      <Checker val={TWITTER}>
        <a
          target="_blank"
          rel="noreferrer"
          href={TWITTER}
          className={"transform translate-y-0 lg:-translate-y-6 " + buttonClass}
        >
          <XIcon iconClass={iconClass} />
        </a>
      </Checker>
      <Checker val={TELEGRAM}>
        <a
          target="_blank"
          rel="noreferrer"
          href={TELEGRAM}
          className={"transform translate-y-0 lg:translate-y-2 " + buttonClass}
        >
          <TgIcon iconClass={iconClass} />
        </a>
      </Checker>
      <Checker val={DEXSCREENER}>
        <a
          target="_blank"
          rel="noreferrer"
          href={DEXSCREENER}
          className={"transform translate-y-0 lg:-translate-y-9 " + buttonClass}
        >
          <DexscreenerIcon iconClass={iconClass} />
        </a>
      </Checker>
      <Checker val={RAYDIUM}>
        <a
          target="_blank"
          rel="noreferrer"
          href={RAYDIUM}
          className={"transform translate-y-0 lg:-translate-y-8 " + buttonClass}
        >
          <RaydiumIcon iconClass={iconClass} />
        </a>
      </Checker>
      <Checker val={JUPITER}>
        <a
          target="_blank"
          rel="noreferrer"
          href={JUPITER}
          className={
            "transform translate-x-0 lg:-translate-y-24 translate-y-0 lg:-translate-x-5 " +
            buttonClass
          }
        >
          <JupiterIcon iconClass={iconClass} />
        </a>
      </Checker>
    </div>
  );
};
