import { redirect } from "next/navigation";
import React from "react";

import prisma from "@/helpers/db";

async function createTodo(_data: FormData) {
  "use server";

  await prisma.counter.update({
    where: { id: 1 },
    data: { count: { increment: 1 } },
  });

  redirect("/");
}

const Counter = async () => {
  const counter = await prisma.counter.upsert({
    update: {},
    create: { count: 1 },
    where: { id: 1 },
  });

  return (
    <div className="shadow-md p-4 m-4">
      <div>Counter value is {counter.count}</div>

      <hr className="my-4" />

      <form action={createTodo}>
        <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Increment
        </button>
      </form>
    </div>
  );
};

export default Counter;
