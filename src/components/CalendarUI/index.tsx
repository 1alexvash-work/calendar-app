"use client";

import { DateTime } from "luxon";
import { useState } from "react";

import { Holiday } from "@/app/page";

import DayCard from "./DayCard";
import DaysOfWeek from "./DaysOfWeek";
import MonthControls from "./MonthControls";

type Props = {
  holidays: Holiday[];
};

const CalendarUI = ({ holidays }: Props) => {
  const [selectedDate, setSelectedDate] = useState(DateTime.local());

  const offsetValue = selectedDate.startOf("month").weekday - 1;
  const columnOffset = Array.from({ length: offsetValue }, (_, index) => (
    <div key={index} />
  ));

  return (
    <div className="p-4 m-4 shadow-md min-w-[960px]">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold mb-2">
          {selectedDate.toFormat("MMMM yyyy")}
        </h2>
        <MonthControls setSelectedDateLuxon={setSelectedDate} />
      </div>

      <DaysOfWeek />

      <hr className="my-4" />

      <div className="grid grid-cols-7 gap-4">
        {columnOffset}
        {Array.from(
          { length: selectedDate.daysInMonth! },
          (_, index) => index + 1
        ).map((day) => (
          <DayCard
            day={day}
            key={day}
            selectedDate={selectedDate}
            holidays={holidays}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarUI;
