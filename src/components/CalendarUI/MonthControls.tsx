type Props = {
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
};

const months = {
  next: 1,
  previous: -1,
};

const MonthControls = ({ setCurrentDate }: Props) => {
  const handleMonthChange = (increment: number) => {
    setCurrentDate((prevDate: Date) => {
      return new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() + increment,
        prevDate.getDate()
      );
    });
  };

  return (
    <div>
      <button
        className="p-2 shadow-md mr-2"
        onClick={() => handleMonthChange(months.previous)}
      >
        Previous month
      </button>
      <button
        className="p-2 shadow-md"
        onClick={() => handleMonthChange(months.next)}
      >
        Next month
      </button>
    </div>
  );
};

export default MonthControls;
