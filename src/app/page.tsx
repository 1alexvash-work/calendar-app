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
      <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Weekly view
      </button>
      |
      <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Monthly view
      </button>
      <hr />
      <CalendarUI holidays={holidays} />
      <Counter />
    </>
  );
};

export default Home;
