import Floor from "./components/Floor";
import { useState } from "react";

function App() {
  const [activeFloor, setActiveFloor] = useState(null);
  const [liftOn, setLiftOn] = useState(false);
  const toggleLift = () => {
    setLiftOn(!liftOn);
  };
  return (
    <div>
      <h1 className="text-3xl text-center m-5 font-bold">Elevator</h1>
      <button
        className={` border px-3 font-medium py-1 my-5 block mx-auto rounded-2xl cursor-pointer ${
          liftOn ? "bg-green-300 text-green-800" : "bg-red-300 text-red-950"
        }`}
        onClick={toggleLift}
      >
        {liftOn ? "ON" : "OFF"}
      </button>

      <div
        className={`p-5 flex flex-col text-center items-center bg-amber-50 py-3 px-10 w-150 mx-auto rounded-4xl shadow-2xl`}
      >
        {[3, 2, 1, 0].map((floorNum) => {
          return (
            <Floor
              key={floorNum}
              floorNum={floorNum}
              activeFloor={activeFloor}
              setActiveFloor={setActiveFloor}
              isDisable={!liftOn}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
