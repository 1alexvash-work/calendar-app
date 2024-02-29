import { DateTime } from "luxon";
import { useState } from "react";
import Modal from "react-responsive-modal";
import { toast } from "react-toastify";

import { Holiday } from "@/app/page";

type Props = {
  selectedDate: Date;
  day: number;
  holidays: Holiday[];
};

const DayCard = ({ selectedDate, day, holidays }: Props) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [taskName, setTaskName] = useState("");

  const save = (event) => {
    console.log("event:", event);
    console.log("save");
    toast("Wow so easy!");
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
          } text-white px-2 py-1 rounded"`}
          onClick={onOpenModal}
          title="Add Task"
        >
          +
        </button>
      </div>

      <Modal open={open} onClose={onCloseModal} center>
        <h3 className="text-xl font-bold mb-4">Task name</h3>
        <input
          className="border border-gray-300 rounded px-4 py-2 mb-4"
          type="text"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={save}
        >
          Save
        </button>
      </Modal>
    </div>
  );
};

export default DayCard;
