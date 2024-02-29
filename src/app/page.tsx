import "react-responsive-modal/styles.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { ToastContainer } from "react-toastify";

import CalendarUI from "@/components/CalendarUI";
import { getUSHolidays } from "@/components/CalendarUI/serverActions";
import Counter from "@/components/Counter";

export type Holiday = {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: null | string[];
  launchYear: null | number;
  types: string[];
};

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
