import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import type { DialogProps } from "@mui/material";
import { PresaleInfo, AirdropInfo, FormType } from "./utils";

interface BannerProps {
  formType: FormType;
  dropInfo: PresaleInfo | AirdropInfo;
  close: (show: boolean) => void;
}

export const Banner = (props: BannerProps) => {
  const isMobile = window.innerWidth < 1024 ? true : false;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    width: isMobile ? "90vw" : "auto",
    bgcolor: "#1B1D28",
    border: "6px solid white",
    color: "text.primary",
    borderRadius: 5,
    boxShadow: 32,
    outline: "none",
    p: 2,
  };

  const [timeLeft, setTimeLeft] = useState<number>(5);
  const [open, setOpen] = useState(true);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsButtonEnabled(true);
      setTimeLeft(0);
    }

    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleClose: DialogProps["onClose"] = (_event, reason) => {
    if (reason && reason === "backdropClick") return;

    if (!isButtonEnabled) return;
    setOpen(false);
  };

  return (
    <>
      <Modal
        className={!open ? "pointer-events-none" : ""}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 3,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="flex flex-col items-center h-fit px-8 py-8 w-full md:gap-8 text-white text-center form uppercase justify-between">
              {props.formType === FormType.Airdrop ? (
                <>
                  <div className="flex w-full justify-center">
                    <p className="text-xl md:text-4xl mb-12 text-white">
                      ${props.dropInfo.tokenTicker} Airdrop Instructions
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 md:gap-8 justify-center text-lg md:text-2xl text-white">
                    <p className="text-white">1) ENTER YOUR SOL WALLET</p>
                    <p className="text-white">2) ENTER YOUR TWITTER @</p>
                    <p className="text-white">
                      3) FOLLOW {(props.dropInfo as AirdropInfo).toXFollow}
                    </p>
                    <p className="mb-6 text-white">
                      4) MAKE A POST USING ${props.dropInfo.tokenTicker}, @
                      {(props.dropInfo as AirdropInfo).toXFollow} AND A PICTURE
                    </p>
                    {/* <p className="text-white">
                      Example: I am wif ${props.dropInfo.tokenTicker} @
                      {(props.dropInfo as AirdropInfo).toXFollow}
                    </p> */}
                    <p className="text-white mb-4">
                      Twitter account should be{" "}
                      {(props.dropInfo as AirdropInfo).xAge}+ days old and{" "}
                      {(props.dropInfo as AirdropInfo).xFollowers}+ followers
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex w-full justify-center">
                    <p className="text-xl md:text-4xl mb-12 text-white">
                      ${props.dropInfo.tokenTicker} Presale Instructions
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 md:gap-8 justify-center text-lg md:text-2xl text-white">
                    <p className="text-white">1) CONNECT YOUR WALLET</p>
                    <p className="text-white">
                      2) ENTER THE AMOUNT OF SOL (
                      {(props.dropInfo as PresaleInfo).presaleMaxSolAmount} SOL)
                    </p>
                    <p className="text-white mb-6">
                      3) CLICK BUY AND FOLLOW STEPS IN THE WALLET
                    </p>
                    <p className="text-white mb-4">
                      Presale SOL will be used for DEV BUY BURN
                    </p>
                  </div>
                </>
              )}
              <div className="flex flex-col gap-2 md:gap-2 justify-center align-middle w-full items-center">
                <button
                  style={{
                    WebkitTextStrokeColor: "black",
                    WebkitTextStrokeWidth: "3px",
                  }}
                  className={
                    "w-7/12 md:w-8/12 xl:w-4/12 my-auto cursor-pointer transition duration-500 ease-in-out transform text-[#FFD700] text-5xl " +
                    (isButtonEnabled ? "hover:scale-[1.1]" : " opacity-50")
                  }
                  // @ts-expect-error This error is expected because the 'handleClose' function is not explicitly typed.
                  onClick={handleClose}
                >
                  {timeLeft === 0 ? "ENTER" : timeLeft}
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
