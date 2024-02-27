type Props = {
  day: number;
  currentDay: number;
};

const DayCard = ({ day, currentDay }: Props) => {
  return (
    <div
      key={day}
      className={`p-4 shadow-md ${
        day === currentDay ? "bg-blue-500 text-white" : ""
      }`}
    >
      {day}
    </div>
  );
};

export default DayCard;
