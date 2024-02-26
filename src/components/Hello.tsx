import React, { useEffect } from "react";

const calendarApiUrl = "https://date.nager.at/api/v3";

const getUSHolidays = () => {
  return fetch(`${calendarApiUrl}/PublicHolidays/2021/US`).then((response) =>
    response.json()
  );
};

const Hello = () => {
  useEffect(() => {
    getUSHolidays().then((data) => {
      console.log(data);
    });
  }, []);

  return <div>Hello</div>;
};

export default Hello;
