"use server";

import db from "@/helpers/db";

import { Holiday } from "./types";

export const getUSHolidays = async () => {
  const calendarApiUrl = "https://date.nager.at/api/v3";

  const currentYear = new Date().getFullYear();
  const country = "US";

  const result = await fetch(
    `${calendarApiUrl}/PublicHolidays/${currentYear}/${country}`
  );
  const data = await result.json();

  return data as Holiday[];
};

export const getTasks = async () => {
  return await db.tasks.findMany();
};

export const saveServer = async (taskName: string) => {
  await db.tasks.create({
    data: {
      title: taskName,
      date: new Date(),
    },
  });
};
