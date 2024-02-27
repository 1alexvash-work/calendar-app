type Props = {
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
};

const MonthControls = ({ setCurrentDate }: Props) => {
  const handlePreviousMonth = () => {
    setCurrentDate((prevDate: Date) => {
      return new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() - 1,
        prevDate.getDate()
      );
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate: Date) => {
      return new Date(
        prevDate.getFullYear(),
        prevDate.getMonth() + 1,
        prevDate.getDate()
      );
    });
  };

  return (
    <div>
      <button className="p-2 shadow-md mr-2" onClick={handlePreviousMonth}>
        Previous month
      </button>
      <button className="p-2 shadow-md" onClick={handleNextMonth}>
        Next month
      </button>
    </div>
  );
};

export default MonthControls;
