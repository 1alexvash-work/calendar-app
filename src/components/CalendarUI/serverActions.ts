"use server";

import db from "@/helpers/db";

export const getUSHolidays = async () => {
  const calendarApiUrl = "https://date.nager.at/api/v3";

  const currentYear = new Date().getFullYear();
  const country = "US";

  const result = await fetch(
    `${calendarApiUrl}/PublicHolidays/${currentYear}/${country}`
  );
  const data = await result.json();

  return data;
};

export const saveServer = async (taskName: string) => {
  await db.tasks.create({
    data: {
      title: taskName,
      date: new Date(),
    },
  });
};
