import { DateTime } from "luxon";
import { useState } from "react";
import Modal from "react-responsive-modal";

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
      } h-40`}
    >
      {day}
      {thisDayHoliday && <span> - {thisDayHoliday.localName}</span>}

      <div>
        <button onClick={onOpenModal}>Add Task</button>
      </div>

      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
      </Modal>
    </div>
  );
};

export default DayCard;
