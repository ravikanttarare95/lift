import React, { useState } from "react";

function Lift({ floorNum, isActive }) {
  return (
    <div
      className={`${
        isActive ? "bg-green-300" : "bg-white"
      } h-22 w-40 border flex items-center justify-center text-4xl`}
    >
      {floorNum}
    </div>
  );
}

export default Lift;
