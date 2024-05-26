import { RPC_ENDPOINT } from "../../../../common/urls";
import { FC, useMemo } from "react";
import { PresaleForm } from "./presale-form";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";
import "@solana/wallet-adapter-react-ui/styles.css";
import { PresaleInfo } from "../../utils";

interface PresaleProps {
  dropInfo: PresaleInfo;
  disabled: boolean;
}

export const Presale: FC<PresaleProps> = (props: PresaleProps) => {
  const wallets = useMemo(() => [new SolflareWalletAdapter()], []);

  return (
    <>
      <ConnectionProvider
        endpoint={RPC_ENDPOINT}
        config={{ commitment: "confirmed" }}
      >
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <PresaleForm dropInfo={props.dropInfo} disabled={props.disabled} />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
};
