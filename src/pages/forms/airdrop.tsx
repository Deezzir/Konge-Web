import { useEffect, useState } from "react";
import { AboutDrop } from "./components/about-drop/about-drop";
import { CheckElegibility } from "./components/check-elegibility";
import { SignUpUpdate } from "./components/airdrop/signup-update";
import { useCountdown } from "../../hooks/useCountdown";
import axios from "axios";
import { sendErrorNotification, DropInfo, FormType } from "./utils";
import { BlockWrapper } from "../../common/block-wrapper";
import { Banner } from "./banner";
import { Footer } from "../../common/footer";

const AirdropForm = () => {
  const [, setShowBanner] = useState(false);
  const [dropInfo, setDropInfo] = useState<DropInfo>({
    numberOfMaxAirdropUsers: 75,
    numberOfMaxPresaleUsers: 500,
    numberOfAirdropUsers: 0,
    numberOfPresaleUsers: 0,
    deadline: 0,
    toXFollow: "letto_dev",
    toTGFollow: "letto_dev",
    presaleMaxSolAmount: 5.0,
    presaleMinSolAmount: 0.1,
    presaleSolAmount: 0,
    presaleTokenAmount: 10,
    airdropTokenAmount: 10,
    tokenTicker: "SOL",
    dropPublicKey: "",
    xFollowers: 30,
    xAge: 30,
  });

  const [days, hours, minutes, seconds] = useCountdown(dropInfo.deadline);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND + "/drop/details")
      .then((response: { data: DropInfo }) => {
        if (!response.data.numberOfMaxAirdropUsers) throw new Error("No data");
        setDropInfo(response.data as DropInfo);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      })
      .catch(() => {
        sendErrorNotification(
          "Couldn't load Drop Information. Contact dev please."
        );
      });
  }, []);

  const blured = days + hours + minutes + seconds <= 0;
  const blurredAirdrop =
    dropInfo.numberOfAirdropUsers >= dropInfo.numberOfMaxAirdropUsers;

  return (
    <BlockWrapper>
      <Banner
        close={setShowBanner}
        dropInfo={dropInfo}
        formType={FormType.Airdrop}
      />
      <div
        className="flex flex-col gap-1 pb-12 pt-2 px-2 md:px-20 relative justify-center items-center uppercase cursor-default form bg-[#333333]"
        style={{ wordSpacing: "5px" }}
      >
        <div className="w-full lg:w-[90%] justify-self-center self-center z-50">
          <AboutDrop
            dropInfo={dropInfo}
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            isLoading={isLoading}
            formType={FormType.Airdrop}
          />
        </div>
        <div className="w-full md:w-3/4 xl:w-[55%] justify-self-center self-center z-50 mb-20">
          <CheckElegibility formType={FormType.Airdrop} />
        </div>
        <div className="w-full md:w-3/4 xl:w-full flex flex-col xl:flex-row gap-8 p-4 justify-center items-center">
          <div className="w-full xl:w-[60%] relative">
            {blurredAirdrop && (
              <h3
                className="text-4xl font-bold text-center z-50 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-[#FFD700]"
                style={{
                  WebkitTextStrokeColor: "black",
                  WebkitTextStrokeWidth: "2px",
                }}
              >
                Airdrop enrollment is done
              </h3>
            )}
            <div
              className={
                "w-full " +
                (blured || blurredAirdrop || isLoading
                  ? "blur-sm select-none pointer-events-none"
                  : "")
              }
            >
              <SignUpUpdate dropInfo={dropInfo} />
            </div>
          </div>
        </div>
      </div>
      <Footer customClass="bg-[#333333] text-white" />
    </BlockWrapper>
  );
};

export default AirdropForm;
