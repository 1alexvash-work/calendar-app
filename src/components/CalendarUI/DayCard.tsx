import { DateTime } from "luxon";

import { Holiday } from "@/app/page";

type Props = {
  selectedDate: Date;
  day: number;
  holidays: Holiday[];
};

const DayCard = ({ selectedDate, day, holidays }: Props) => {
  const today = DateTime.local().toISODate();
  const luxonDay = DateTime.fromObject({
    year: selectedDate.getFullYear(),
    month: selectedDate.getMonth() + 1,
    day,
  }).toISODate();

  const isToday = luxonDay === today;
  const hasHoliday = holidays.some((holiday) => holiday.date === luxonDay);

  return (
    <div
      key={day}
      className={`p-4 shadow-md ${isToday ? "bg-blue-500 text-white" : ""}`}
    >
      {day}
      {hasHoliday && <span> - Holiday!</span>}
    </div>
  );
};

export default DayCard;
