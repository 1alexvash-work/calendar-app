import "react-responsive-modal/styles.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ToastContainer } from "react-toastify";

import CalendarUI from "@/components/CalendarUI";
import { getUSHolidays } from "@/components/CalendarUI/serverActions";
import Counter from "@/components/Counter";

const Home = async () => {
  const holidays = await getUSHolidays();

  return (
    <>
      <CalendarUI holidays={holidays} />
      <Counter />
      <ToastContainer position="bottom-left" />
    </>
  );
};

export default Home;
