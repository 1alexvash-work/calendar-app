import "react-responsive-modal/styles.css";

import React from "react";

import CalendarUI from "@/components/CalendarUI";
import Counter from "@/components/Counter";

const getUSHolidays = async () => {
  const calendarApiUrl = "https://date.nager.at/api/v3";
  const currentYear = new Date().getFullYear();
  const result = await fetch(
    `${calendarApiUrl}/PublicHolidays/${currentYear}/US`
  );
  const data = await result.json();

  return data;
};

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
    </>
  );
};

export default Home;
