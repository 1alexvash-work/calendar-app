type Props = {
  selectedDate: Date;
  day: number;
};

const DayCard = ({ selectedDate, day }: Props) => {
  const today = new Date();

  const isToday = () => {
    return (
      day === today.getDate() &&
      selectedDate.getMonth() === today.getMonth() &&
      selectedDate.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div
      key={day}
      className={`p-4 shadow-md ${isToday() ? "bg-blue-500 text-white" : ""}`}
    >
      {day}
    </div>
  );
};

export default DayCard;
