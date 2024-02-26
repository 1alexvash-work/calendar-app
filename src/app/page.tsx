import React from "react";

import Holidays from "@/components/Holidays";

const Home = () => (
  <>
    <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Weekly view
    </button>
    |
    <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Monthly view
    </button>
    <hr />
    Calendar UI
    <Holidays />
  </>
);

export default Home;
