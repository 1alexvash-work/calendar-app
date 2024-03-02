import { Reorder } from "framer-motion";
import { DateTime } from "luxon";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "react-responsive-modal";
import { toast } from "react-toastify";

import useModal from "@/hooks/useModal";

import { addTask } from "../serverActions";
import { Holiday, Task } from "../types";
import TaskBrick from "./TaskBrick";

type Props = {
  selectedDate: DateTime;
  day: number;
  holidays: Holiday[];
  tasks: Task[];
};

const DayCard = ({ selectedDate, day, holidays, tasks }: Props) => {
  const router = useRouter();
  const { isOpen, open, close } = useModal();

  const [taskName, setTaskName] = useState("");

  const isSaveButtonDisabled = taskName.trim() === "";

  const today = DateTime.local().toISODate();
  const luxonDay = DateTime.fromObject({
    year: selectedDate.year,
    month: selectedDate.month,
    day,
  }).toISODate();

  const isToday = luxonDay === today;
  const thisDayHoliday = holidays.find((holiday) => holiday.date === luxonDay);
  const thisDayTasks = tasks.filter(
    ({ date }) => date.toISOString().split("T")[0] === luxonDay
  );

  const currentDayInfo = (
    <>
      {day}
      {thisDayHoliday && <span> - {thisDayHoliday.localName}</span>}
    </>
  );

  const [items, setItems] = useState([0, 1, 2, 3]);

  const save = async () => {
    const ukraineTimeZoneHourCorrection = 3;

    await addTask({
      title: taskName,
      date: DateTime.fromObject({
        year: selectedDate.year,
        month: selectedDate.month,
        day,
        hour: ukraineTimeZoneHourCorrection,
      }).toJSDate(),
    });

    setTaskName("");

    toast.success("Task saved successfully");
    close();

    router.refresh();
  };

  return (
    <div
      key={day}
      className={`p-4 shadow-md ${
        isToday ? "bg-blue-500 text-white" : ""
      } h-40 relative`}
    >
      {currentDayInfo}

      {thisDayTasks.length > 0 && (
        <div className="flex flex-col gap-1">
          {thisDayTasks.map((task) => (
            <TaskBrick key={task.id} task={task} />
          ))}
        </div>
      )}

      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>

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

      <Modal open={isOpen} onClose={close} center>
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
