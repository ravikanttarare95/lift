import React, { useState } from "react";

function Lift({ floorNum, isActive }) {
  return (
    <div
      className={`${
        isActive ? "bg-green-300" : ""
      } h-30 w-50 border flex items-center justify-center text-4xl`}
    >
      {floorNum}
    </div>
  );
}

export default Lift;
