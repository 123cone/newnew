import React from "react";

import FloatingLanterns from "./FloatingLanterns"; // New effect
import Petal from "./Petal"

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-[#ffc0cb] overflow-hidden">
      <Petal />
      <FloatingLanterns />
    </div>
  );
};

export default Home;
