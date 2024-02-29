import { DateTime } from "luxon";
import { useState } from "react";
import Modal from "react-responsive-modal";
import { toast } from "react-toastify";

import { Holiday } from "@/app/page";
import useModal from "@/hooks/useModal";

type Props = {
  selectedDate: Date;
  day: number;
  holidays: Holiday[];
};

const DayCard = ({ selectedDate, day, holidays }: Props) => {
  const { isOpen, open, close } = useModal();

  const [taskName, setTaskName] = useState("");

  const isSaveButtonDisabled = taskName.trim() === "";

  const save = () => {
    toast.success("Task saved successfully");
    close();
  };

  const today = DateTime.local().toISODate();
  const luxonDay = DateTime.fromObject({
    year: selectedDate.getFullYear(),
    month: selectedDate.getMonth() + 1,
    day,
  }).toISODate();

  const isToday = luxonDay === today;
  const thisDayHoliday = holidays.find((holiday) => holiday.date === luxonDay);

  return (
    <div
      key={day}
      className={`p-4 shadow-md ${
        isToday ? "bg-blue-500 text-white" : ""
      } h-40 relative`}
    >
      {day}
      {thisDayHoliday && <span> - {thisDayHoliday.localName}</span>}

      <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
        <button
          className={`${
            isToday ? "bg-red-500" : "bg-blue-500 text-white"
          } text-white px-2 py-1 rounded`}
          onClick={open}
          title="Add Task"
        >
          +
        </button>
      </div>

      <Modal open={isOpen} onClose={open} center>
        <h3 className="text-xl font-bold mb-4">Task name</h3>
        <input
          className="border border-gray-300 rounded px-4 py-2 mb-4"
          type="text"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            isSaveButtonDisabled ? "cursor-not-allowed bg-gray-400" : ""
          }`}
          onClick={save}
          disabled={isSaveButtonDisabled}
        >
          Save
        </button>
      </Modal>
    </div>
  );
};

export default DayCard;
