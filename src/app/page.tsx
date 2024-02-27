import React from "react";

import CalendarUI from "@/components/CalendarUI";
import Counter from "@/components/Counter";
import Holidays from "@/components/Holidays";

const Home = async () => {
  return (
    <>
      <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Weekly view
      </button>
      |
      <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Monthly view
      </button>
      <hr />
      <CalendarUI />
      <Holidays />
      <Counter />
    </>
  );
};

export default Home;
