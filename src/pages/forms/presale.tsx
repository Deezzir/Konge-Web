import { useEffect, useState } from "react";
import { AboutDrop } from "./components/about-drop/about-drop";
import { CheckElegibility } from "./components/check-elegibility";
import { useCountdown } from "../../hooks/useCountdown";
import axios from "axios";
import { sendErrorNotification, PresaleInfo, FormType } from "./utils";
import { Presale } from "./components/presale/presale";
import { BlockWrapper } from "../../common/block-wrapper";
import { Banner } from "./banner";
import { Footer } from "../../common/footer";

export const PresaleForm = () => {
  const [, setShowBanner] = useState(false);
  const [dropInfo, setDropInfo] = useState<PresaleInfo>({
    numberOfMaxPresaleUsers: 500,
    numberOfPresaleUsers: 0,
    deadline: 0,
    presaleMaxSolAmount: 5.0,
    presaleMinSolAmount: 0.1,
    presaleSolAmount: 0,
    presaleTokenAmount: 10,
    tokenTicker: "SOL",
    dropPublicKey: "",
  });

  const [days, hours, minutes, seconds] = useCountdown(dropInfo.deadline);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND + "/drop/presale")
      .then((response: { data: PresaleInfo }) => {
        if (!response.data.numberOfMaxPresaleUsers) throw new Error("No data");
        setDropInfo(response.data as PresaleInfo);
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
  const blurredPresale =
    dropInfo.numberOfPresaleUsers >= dropInfo.numberOfMaxPresaleUsers;

  return (
    <BlockWrapper>
      <Banner
        close={setShowBanner}
        dropInfo={dropInfo}
        formType={FormType.Presale}
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
            formType={FormType.Presale}
          />
        </div>
        <div className="w-full md:w-3/4 xl:w-[55%] justify-self-center self-center z-50 mb-20">
          <CheckElegibility formType={FormType.Presale} />
        </div>
        <div className="w-full md:w-3/4 xl:w-full flex flex-col xl:flex-row gap-8 p-4 justify-center items-center">
          <div className="w-full xl:w-[55%] relative">
            {blurredPresale && (
              <h3
                className="text-3xl font-bold text-center z-50 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-[#FFD700]"
                style={{
                  WebkitTextStrokeColor: "black",
                  WebkitTextStrokeWidth: "2px",
                }}
              >
                Presale enrollment is done
              </h3>
            )}
            <div
              className={
                "w-full h-full " +
                (blured || blurredPresale || isLoading
                  ? "blur-sm select-none pointer-events-none"
                  : "")
              }
            >
              <Presale
                dropInfo={dropInfo}
                disabled={blured || blurredPresale || isLoading}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer customClass="bg-[#333333] text-white" />
    </BlockWrapper>
  );
};

export default PresaleForm;
