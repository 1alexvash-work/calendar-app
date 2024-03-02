"use client";

import { DateTime } from "luxon";
import { useState } from "react";

import DayCard from "./DayCard";
import DaysOfWeek from "./DaysOfWeek";
import MonthControls from "./MonthControls";
import { downloadJSON } from "./serverActions";
import { Holiday, Task } from "./types";

type Props = {
  holidays: Holiday[];
  tasks: Task[];
};

const CalendarUI = ({ holidays, tasks }: Props) => {
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
        <MonthControls setSelectedDate={setSelectedDate} />
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
            tasks={tasks}
          />
        ))}
      </div>

      <button onClick={downloadJSON}>Download JSON</button>
    </div>
  );
};

export default CalendarUI;
