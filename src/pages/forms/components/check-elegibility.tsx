import { useState } from "react";
import axios from "axios";
import {
  FormType,
  sendErrorNotification,
  sendSuccessNotification,
  sendWarningNotification,
} from "../utils";
import SearchIcon from "@mui/icons-material/Search";

// eslint-disable-next-line react-refresh/only-export-components
export const SERVER = import.meta.env.VITE_BACKEND || "http://localhost:5000";

interface CheckElegibilityProps {
  formType: FormType;
}

export const CheckElegibility = (props: CheckElegibilityProps) => {
  const [wallet, setWallet] = useState("");

  const onWalletChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWallet(e.target.value);
  };

  const onCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const walletToSend = wallet.replace(/\s/g, "");
    if (wallet.length < 34 || wallet.length > 44) {
      sendErrorNotification("Wrong solana wallet");
      return;
    }

    axios
      .post(import.meta.env.VITE_BACKEND + "/drop/check", {
        wallet: walletToSend,
      })
      .then((response) => {
        const {
          isValidWallet,
          isPresaleEnrolled,
          isAirdropEnrolled,
          presaleAmount,
        } = response.data;
        if (isValidWallet) {
          if (props.formType === FormType.Airdrop) {
            if (isAirdropEnrolled) {
              sendSuccessNotification("Airdrop enrolled");
            } else {
              sendWarningNotification("Airdrop not enrolled");
            }
          } else if (props.formType === FormType.Presale) {
            if (isPresaleEnrolled) {
              sendSuccessNotification(
                `Presale enrolled with ${presaleAmount.toFixed(2)} SOL`
              );
            } else {
              sendWarningNotification("Presale not enrolled");
            }
          }
        } else {
          sendWarningNotification("Invalid wallet");
        }
      })
      .catch((error) => {
        sendErrorNotification("Unhandled error:" + error);
      });
  };

  return (
    <div className="flex flex-col gap-2 w-full justify-center mt-4 p-4 md:p-10">
      <p
        className="text-3xl font-bold text-center text-[#FFD700] tracking-wider"
        style={{
          WebkitTextStrokeColor: "black",
          WebkitTextStrokeWidth: "2px",
        }}
      >
        Check account enrollment
      </p>
      <form onSubmit={onCheck}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-black sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 top-[1.8rem] start-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon color="action" />
          </div>
          <p
            className="text-lg text-[#FFD700]"
            style={{
              WebkitTextStrokeColor: "black",
              WebkitTextStrokeWidth: "1px",
            }}
          >
            Solana Wallet
          </p>
          <input
            value={wallet}
            onChange={onWalletChange}
            type="text"
            id="solana-check-wallet"
            className="block w-full p-4 ps-10 pe-[7.2rem] lg:pe-0 text-sm text-black border border-black rounded-lg bg-white focus:ring-[#1f2937] focus:border-[#1f2937]"
            placeholder="G7aCnwX3TEqcsBhwLoeYxhYnzHWPpjPbnodk6cVZkw5A"
            required
          />
          <button
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            onClick={onCheck}
            className="text-white absolute end-2.5 bottom-2.5 bg-[#1f2937] hover:bg-[#1f2937dc] focus:ring-4 focus:outline-none focus:ring-[#1f2937] font-medium rounded-lg text-sm px-4 py-2 cursor-pointer transition-transform duration-75 ease-in-out hover:scale-[1.02]"
          >
            Validate
          </button>
        </div>
      </form>
    </div>
  );
};
