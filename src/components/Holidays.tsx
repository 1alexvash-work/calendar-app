import React from "react";

const calendarApiUrl = "https://date.nager.at/api/v3";

const getUSHolidays = async () => {
  const result = await fetch(`${calendarApiUrl}/PublicHolidays/2021/US`);
  const data = await result.json();

  return data;
};

type Holiday = {
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

const Hello = async () => {
  const holidays: Holiday[] = await getUSHolidays();

  return (
    <div className="text-center shadow-md p-4 m-4">
      <h1 className="text-4xl mb-4">Holidays</h1>

      <ul>
        {holidays.map((holiday) => (
          <li key={holiday.date}>{holiday.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hello;
