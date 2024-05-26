import DateTimeDisplay from "./date-time-display";

interface ShowCounterProps {
  days: number;
  hours: number;
  minutes: number;
}

const ShowCounter = (props: ShowCounterProps) => {
  return (
    <>
      <DateTimeDisplay
        value={props.days}
        type={props.days > 1 || props.days === 0 ? "Days" : "Day"}
        isDanger={props.days <= 3}
      />
      <p>:</p>
      <DateTimeDisplay
        value={props.hours}
        type={props.hours > 1 || props.hours === 0 ? "Hours" : "Hour"}
        isDanger={false}
      />
      <p>:</p>
      <DateTimeDisplay
        value={props.minutes}
        type={props.minutes > 1 || props.minutes === 0 ? "Mins" : "Min"}
        isDanger={false}
      />
    </>
  );
};

export default ShowCounter;
