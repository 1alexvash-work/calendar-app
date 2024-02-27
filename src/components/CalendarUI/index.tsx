const Card = () => {
  return <div className="p-4 m-4 shadow-md">Card</div>;
};

const CalendarUI = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  const currentMonth = currentDate.toLocaleString("en-US", {
    month: "long",
  });
  const currentYear = currentDate.getFullYear();

  return (
    <div className="p-4 m-4 shadow-md">
      <h1 className="text-xl font-bold mb-2">{`${currentMonth} ${currentYear}`}</h1>

      <div className="flex justify-between mb-4 gap-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-4 shadow-md flex-1">
            {day}
          </div>
        ))}
      </div>

      <hr className="my-4" />

      <div className="grid grid-cols-7 gap-4">
        {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
          <div
            key={day}
            className={`p-4 shadow-md ${
              day === currentDay ? "bg-blue-500 text-white" : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarUI;
