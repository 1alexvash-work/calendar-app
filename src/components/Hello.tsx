import React from "react";

const calendarApiUrl = "https://date.nager.at/api/v3";

const getUSHolidays = async () => {
  const result = await fetch(`${calendarApiUrl}/PublicHolidays/2021/US`);
  const data = await result.json();

  return data;
};

const Hello = async () => {
  const holidays = await getUSHolidays();
  console.log("holidays:", holidays);

  return <div>Hello3</div>;
};

export default Hello;
