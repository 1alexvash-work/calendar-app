type Props = {
  setSelectedDate: React.Dispatch<React.SetStateAction<luxon.DateTime>>;
};

const months = {
  next: 1,
  previous: -1,
};

const MonthControls = ({ setSelectedDate }: Props) => {
  const handleMonthChange = (increment: number) => {
    setSelectedDate((prevDate: luxon.DateTime) => {
      return prevDate.plus({ months: increment });
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
