const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const DaysOfWeek = () => (
  <div className="flex justify-between mb-4 gap-4">
    {daysOfWeek.map((day) => (
      <div key={day} className="p-4 shadow-md flex-1 font-bold">
        {day}
      </div>
    ))}
  </div>
);

export default DaysOfWeek;
