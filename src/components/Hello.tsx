import React, { useEffect } from "react";

const calendarApiUrl = "https://date.nager.at/api/v3";

const Hello = () => {
  useEffect(() => {
    fetch(`${calendarApiUrl}/AvailableCountries`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Hello</div>;
};

export default Hello;
