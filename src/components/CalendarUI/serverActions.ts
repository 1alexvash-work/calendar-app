"use server";

import db from "@/helpers/db";

export const saveServer = async (taskName: string) => {
  await db.tasks.create({
    data: {
      title: taskName,
      date: new Date(),
    },
  });
};
