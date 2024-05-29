import { Bounce, toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import {
  PublicKey,
  RpcResponseAndContext,
  Signer,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { RPC_CONNECTION } from "../../common/urls";

export const FormattedMessages = ({ messages }: { messages: string[] }) => (
  <div>
    {messages.map((msg, index) => (
      <p key={index} style={{ margin: 0 }}>
        {msg}
      </p>
    ))}
  </div>
);

// eslint-disable-next-line react-refresh/only-export-components
export const checkWallet = (wallet: string) => {
  let validWallet = true;
  try {
    new PublicKey(wallet);
  } catch (e) {
    validWallet = false;
  }
  return wallet.length >= 34 && wallet.length <= 44 && validWallet;
};

// eslint-disable-next-line react-refresh/only-export-components
export const checkXUsername = (username: string) => {
  return /^@?[0-9a-zA-Z_]{1,15}$/.test(username);
};

// eslint-disable-next-line react-refresh/only-export-components
export const checkXPostLink = (link: string, username: string) => {
  const regex =
    /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/([a-zA-Z0-9_]{1,15})\/status\/([0-9]+)(\?.*)?$/;
  return (
    regex.test(link) && link.toLowerCase().includes(username.toLowerCase())
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const sanitizeWallet = (wallet: string) => {
  return wallet.replace(/\s/g, "");
};

// eslint-disable-next-line react-refresh/only-export-components
export const sanitizeXUsername = (username: string) => {
  return username.replace(/\s/g, "").replace(/^@/, "");
};

// eslint-disable-next-line react-refresh/only-export-components
export const sanitizeXPostLink = (link: string) => {
  if (!link) return "";
  const url = new URL(link.replace(/\s/g, ""));
  return url.origin + url.pathname;
};

// eslint-disable-next-line react-refresh/only-export-components
export enum FormType {
  Presale = "presale",
  Airdrop = "airdrop",
}

export interface AirdropInfo {
  numberOfMaxAirdropUsers: number;
  numberOfAirdropUsers: number;
  deadline: number;
  toXFollow: string;
  airdropTokenAmount: number;
  tokenTicker: string;
  dropPublicKey: string;
  xFollowers: number;
  xAge: number;
}

export interface PresaleInfo {
  numberOfMaxPresaleUsers: number;
  numberOfPresaleUsers: number;
  deadline: number;
  presaleMaxSolAmount: number;
  presaleMinSolAmount: number;
  presaleSolAmount: number;
  presaleTokenAmount: number;
  tokenTicker: string;
  dropPublicKey: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const sendSuccessNotification = (text: string | JSX.Element) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

// eslint-disable-next-line react-refresh/only-export-components
export const sendWarningNotification = (text: string | JSX.Element) => {
  toast.warning(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

// eslint-disable-next-line react-refresh/only-export-components
export const sendErrorNotification = (text: string | JSX.Element) => {
  toast.error(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

// eslint-disable-next-line react-refresh/only-export-components
export const sendEnrollNotification = (status: string | undefined) => {
  return toast(<EnrollToast status={status} text={undefined} />, {
    position: "top-right",
    hideProgressBar: false,
    pauseOnHover: true,
    autoClose: false,
    closeOnClick: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

// eslint-disable-next-line react-refresh/only-export-components
export const sendTxNotification = (
  status: string | undefined,
  signature: string | undefined
) => {
  return toast(
    <TransactionToast status={status} signature={signature} text={undefined} />,
    {
      position: "top-right",
      hideProgressBar: false,
      pauseOnHover: true,
      autoClose: false,
      closeOnClick: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    }
  );
};

export function EnrollToast({
  status,
  text,
}: {
  status: string | undefined;
  text: string | undefined;
}) {
  return (
    <div>
      {status === "pending" && (
        <div className="flex flex-row gap-4 justify-start items-center">
          <CircularProgress size={24} />
          <p>Processing enrollment...</p>
        </div>
      )}
      {status === "confirmed" && (
        <div className="flex flex-row gap-4 justify-start items-center">
          <p>{text ? text : "Success"}</p>
        </div>
      )}
    </div>
  );
}

export function TransactionToast({
  status,
  signature,
  text,
}: {
  status: string | undefined;
  signature: string | undefined;
  text: string | undefined;
}) {
  const getTxUrl = () => `https://solscan.io/tx/${signature}`;
  return (
    <div>
      {status === "pending" && (
        <div className="flex flex-row gap-4 justify-start items-center">
          <CircularProgress size={24} />
          <p>Processing transaction...</p>
        </div>
      )}
      {status === "confirmed" && (
        <div className="flex flex-row gap-4 justify-between items-center">
          <p>{text ? text : "Success"}</p>
          <button
            className="px-2 py-1 rounded-lg border-2 border-white"
            onClick={() => window.open(getTxUrl(), "_blank")}
          >
            View TX
          </button>
        </div>
      )}
    </div>
  );
}

export function InputStatus({
  isLoading,
  isValid,
  style,
}: {
  isLoading: boolean;
  isValid: boolean;
  style: string;
}) {
  return (
    <>
      {isLoading ? (
        <div className={"absolute font-medium px-4 py-1 " + style}>
          <CircularProgress />
        </div>
      ) : !isValid ? (
        <div className={"absolute text-red-500 px-4 py-1 " + style}>
          <CloseIcon />
        </div>
      ) : isValid ? (
        <div
          className={
            "absolute flex items-center text-green-500 px-4 py-1 " + style
          }
        >
          <DoneIcon />
        </div>
      ) : null}
    </>
  );
}

async function isBlockhashExpired(lastValidBlockHeight: number) {
  const currentBlockHeight = await RPC_CONNECTION.getBlockHeight("finalized");
  return currentBlockHeight > lastValidBlockHeight - 150;
}

// eslint-disable-next-line react-refresh/only-export-components
export async function create_and_send_tx(
  instructions: TransactionInstruction[],
  payer: Signer,
  signers: Signer[],
  context: RpcResponseAndContext<
    Readonly<{ blockhash: string; lastValidBlockHeight: number }>
  >
): Promise<string> {
  const versioned_tx = new VersionedTransaction(
    new TransactionMessage({
      payerKey: payer.publicKey,
      recentBlockhash: context.value.blockhash,
      instructions: instructions.filter(Boolean),
    }).compileToV0Message()
  );

  versioned_tx.sign(signers);

  const signature = await RPC_CONNECTION.sendTransaction(versioned_tx);

  let hashExpired = false;
  let txSuccess = false;
  while (!hashExpired && !txSuccess) {
    const { value: status } = await RPC_CONNECTION.getSignatureStatus(
      signature
    );

    if (
      status &&
      (status.confirmationStatus === "confirmed" ||
        status.confirmationStatus === "finalized") &&
      status.err === null
    ) {
      txSuccess = true;
      break;
    }

    if (status && status.err) {
      throw new Error(`Transaction failed`);
    }

    hashExpired = await isBlockhashExpired(context.value.lastValidBlockHeight);

    if (hashExpired) {
      throw new Error("Blockhash has expired.");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return signature;
}
