import Floor from "./components/Floor";
import { useState } from "react";

function App() {
  const [currentFloor, setCurrentFloor] = useState(0);
  const [liftOn, setLiftOn] = useState(false);
  const [activeBtn, setActiveBtn] = useState({
    btnFloor: null,
    direction: null,
  });
  const [floorQueue, setFloorQueue] = useState([]);

  const toggleLift = () => {
    setLiftOn(!liftOn);
  };

  const moveToTarget = (targetFloor, direction) => {
    setActiveBtn({ btnFloor: targetFloor, direction });
    console.log(activeBtn);
    const stepUpDown = targetFloor > currentFloor ? 1 : -1;
    let tempFloor = currentFloor;
    const totalSteps = Math.abs(targetFloor - tempFloor);

    for (let i = 1; i <= totalSteps; i++) {
      setTimeout(() => {
        tempFloor += stepUpDown;
        setCurrentFloor(tempFloor);
      }, i * 1000);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center m-5 font-bold">Elevator</h1>
      <button
        className={`fixed right-90 border px-3 font-medium py-1 my-5 block rounded-2xl cursor-pointer ${
          liftOn ? "bg-red-100 text-red-950" : "bg-green-100 text-green-950"
        }`}
        onClick={toggleLift}
      >
        {liftOn ? "TURN OFF" : "TURN ON"}
      </button>

      <div
        className={`p-5 flex flex-col text-center items-center bg-amber-50 py-3 px-10 w-150 mx-auto rounded-xl shadow-2xl`}
      >
        {[5, 4, 3, 2, 1, 0].map((floorNum, floorIndex) => {
          return (
            <Floor
              key={floorIndex}
              floorNum={floorNum}
              currentFloor={currentFloor}
              isDisable={!liftOn}
              moveToTarget={moveToTarget}
              setFloorQueue={setFloorQueue}
              activeBtn={activeBtn}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
