import React from "react";

import prisma from "@/helpers/db";

const Counter = async () => {
  const counter = await prisma.counter.upsert({
    update: { count: { increment: 1 } },
    create: { count: 1 },
    where: { id: 1 },
  });

  return (
    <div className="shadow-md p-4 m-4">
      Counter value is {counter.count}
      <hr />
      {/* increment form */}
    </div>
  );
};

export default Counter;
