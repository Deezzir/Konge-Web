import CountdownTimer from "./timer/countdown-timer";
import CircularProgress from "@mui/material/CircularProgress";
import { AirdropInfo, PresaleInfo, FormType } from "../../utils";

interface AboutDropProps {
  days: number;
  hours: number;
  seconds: number;
  minutes: number;
  isLoading: boolean;
  formType: FormType;
  dropInfo: AirdropInfo | PresaleInfo;
}

export const AboutDrop = (props: AboutDropProps) => {
  const { days, hours, seconds, minutes } = props;
  return (
    <div className="flex flex-col xl:flex-row gap-3 xl:gap-12 w-full justify-between items-center xl:items-start p-4 md:p-10 z-50">
      <div className="select-none flex w-full flex-row md:w-[70%] xl:w-[42%] items-center justify-center gap-1 text-center px-2 py-3 lg:px-8 lg:py-7 border-2 rounded-xl text-white border-[#ebebeb]">
        {!props.isLoading ? (
          <CountdownTimer
            days={days}
            hours={hours}
            seconds={seconds}
            minutes={minutes}
          />
        ) : (
          <CircularProgress size={36} />
        )}
      </div>
      <div className="flex flex-col w-full md:w-[70%] xl:w-[42%] items-center justify-center px-1 py-2 lg:px-8 lg:py-7 border-2 rounded-xl border-[#ebebeb] text-white text-xl md:text-3xl">
        {!props.isLoading ? (
          <>
            {props.formType === FormType.Airdrop ? (
              <h1 className="font-bold text-center">
                Enrolls: {(props.dropInfo as AirdropInfo).numberOfAirdropUsers}/
                {(props.dropInfo as AirdropInfo).numberOfMaxAirdropUsers}
              </h1>
            ) : (
              <>
                <h1 className="font-bold text-center">
                  Enrolls:{" "}
                  {(props.dropInfo as PresaleInfo).numberOfPresaleUsers}/
                  {(props.dropInfo as PresaleInfo).numberOfMaxPresaleUsers} &{" "}
                  {(props.dropInfo as PresaleInfo).presaleSolAmount.toFixed(2)}{" "}
                  SOL
                </h1>
              </>
            )}
          </>
        ) : (
          <div className="flex justify-start items-center self-center justify-self-center">
            <CircularProgress size={36} />
          </div>
        )}
      </div>
    </div>
  );
};
