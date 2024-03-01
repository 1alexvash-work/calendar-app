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

const randomColors = [
  "green",
  "blue",
  "yellow",
  "magenta",
  "cyan",
  "orange",
  "darkgreen",
  "navy",
  "maroon",
  "olive",
  "teal",
  "pink",
  "gold",
  "brown",
  "gray",
  "silver",
];

const getRandomColor = () => {
  return randomColors[Math.floor(Math.random() * randomColors.length)];
};

type SaveServer = {
  title: string;
  date: Date;
};

export const saveServer = async ({ title, date }: SaveServer) => {
  await db.tasks.create({
    data: {
      title,
      date,
      background: getRandomColor(),
    },
  });
};
