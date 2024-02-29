"use client";

import { DateTime } from "luxon";
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
  const selectedDateLuxon = DateTime.fromJSDate(selectedDate);

  const gap = selectedDateLuxon.startOf("month").weekday - 1;
  const columnOffset = Array.from({ length: gap }, (_, index) => (
    <div key={index} />
  ));
  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();

  return (
    <div className="p-4 m-4 shadow-md min-w-[960px]">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold mb-2">
          {selectedDateLuxon.toFormat("MMMM yyyy")}
        </h2>
        <MonthControls setSelectedDate={setSelectedDate} />
      </div>

      <DaysOfWeek />

      <hr className="my-4" />

      <div className="grid grid-cols-7 gap-4">
        {columnOffset}
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
