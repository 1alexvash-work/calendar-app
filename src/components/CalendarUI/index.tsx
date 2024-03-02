"use client";

import { DateTime } from "luxon";
import { useState } from "react";

import DayCard from "./DayCard";
import DaysOfWeek from "./DaysOfWeek";
import MonthControls from "./MonthControls";
import { Holiday, Task } from "./types";

type Props = {
  holidays: Holiday[];
  tasks: Task[];
  environment: string | undefined;
};

const CalendarUI = ({ holidays, tasks, environment }: Props) => {
  const [selectedDate, setSelectedDate] = useState(DateTime.local());

  const offsetValue = selectedDate.startOf("month").weekday - 1;
  const columnOffset = Array.from({ length: offsetValue }, (_, index) => (
    <div key={index} />
  ));

  const exportToJSON = () => {
    window.open("/json", "_blank");
  };

  const exportToPDF = () => {
    window.print();
  };

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

      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={exportToJSON}
      >
        Export to JSON
      </button>

      <div>Environment is {environment}</div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={exportToPDF}
      >
        Export to PDF
      </button>
    </div>
  );
};

export default CalendarUI;
