"use client";

import { useState } from "react";

import DayCard from "./DayCard";
import DaysOfWeek from "./DaysOfWeek";
import MonthControls from "./MonthControls";

// TODOS
// [] implement changing month via previous and next buttons
// [] display current holiday if there's any

const CalendarUI = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
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
        <MonthControls setCurrentDate={setCurrentDate} />
      </div>

      <DaysOfWeek />

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
