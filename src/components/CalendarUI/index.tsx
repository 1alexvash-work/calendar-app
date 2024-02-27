import DayCard from "./DayCard";

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
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="p-4 m-4 shadow-md min-w-[960px]">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold mb-2">{`${currentMonth} ${currentYear}`}</h2>
        <div>
          <button className="p-2 shadow-md mr-2">Previous month</button>
          <button className="p-2 shadow-md">Next month</button>
        </div>
      </div>

      <div className="flex justify-between mb-4 gap-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-4 shadow-md flex-1">
            {day}
          </div>
        ))}
      </div>

      <hr className="my-4" />

      <div className="grid grid-cols-7 gap-4">
        {Array.from({ length: daysInMonth }, (_, index) => index + 1).map(
          (day) => (
            <DayCard day={day} currentDay={currentDay} key={day} />
          )
        )}
      </div>
    </div>
  );
};

export default CalendarUI;
