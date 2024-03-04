import "react-responsive-modal/styles.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ToastContainer } from "react-toastify";

import CalendarUI from "@/components/CalendarUI";
import { getTasks, getUSHolidays } from "@/components/CalendarUI/serverActions";

const Home = async () => {
  const holidays = await getUSHolidays();
  const tasks = await getTasks();

  return (
    <>
      <CalendarUI holidays={holidays} tasks={tasks} />
      <ToastContainer position="bottom-left" />
    </>
  );
};

export const revalidate = 0;

export default Home;
