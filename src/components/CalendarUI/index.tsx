"use client";

import { useState } from "react";

import { Holiday } from "@/app/page";

import DayCard from "./DayCard";
import DaysOfWeek from "./DaysOfWeek";
import MonthControls from "./MonthControls";

// TODOS
// [] ability to add task
// [] task drag and drop
// [] fix a major bug, days do not correspond to the correct day of the week

type Props = {
  holidays: Holiday[];
};

const CalendarUI = ({ holidays }: Props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const currentMonth = selectedDate.toLocaleString("en-US", {
    month: "long",
  });
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();
  const currentYear = selectedDate.getFullYear();

  return (
    <div className="p-4 m-4 shadow-md min-w-[960px]">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold mb-2">{`${currentMonth} ${currentYear}`}</h2>
        <MonthControls setSelectedDate={setSelectedDate} />
      </div>

      <DaysOfWeek />

      <hr className="my-4" />

      <div className="grid grid-cols-7 gap-4">
        {Array.from({ length: daysInMonth }, (_, index) => index + 1).map(
          (day) => (
            <DayCard
              day={day}
              key={day}
              selectedDate={selectedDate}
              holidays={holidays}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CalendarUI;
