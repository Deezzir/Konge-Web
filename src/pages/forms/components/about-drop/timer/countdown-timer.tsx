import ExpiredNotice from "./expired-notice";
import ShowCounter from "./show-counter";

interface CountdownTimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = (props: CountdownTimerProps) => {
  const { days, hours, minutes, seconds } = props;
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <>
        <ShowCounter days={days} hours={hours} minutes={minutes} />
      </>
    );
  }
};

export default CountdownTimer;
