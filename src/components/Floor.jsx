import Lift from "./Lift";
import Button from "./Button";

function Floor({ floorNum, currentFloor, isDisable, moving, setFloorQueue }) {
  return (
    <div className="flex items-center  gap-5 mt-1">
      <Lift floorNum={floorNum} isActive={currentFloor === floorNum} />
      <div className="h-15 flex flex-col justify-around">
        <Button
          isActive={currentFloor === floorNum}
          btnName={"⮝"}
          onclick={() => {
            moving(floorNum);
            setFloorQueue(floorNum);
          }}
          disabled={isDisable}
        />
        <Button
          isActive={currentFloor === floorNum}
          btnName={"⮟"}
          onclick={() => {
            moving(floorNum);
            setFloorQueue(floorNum);
          }}
          disabled={isDisable}
        />
      </div>
    </div>
  );
}

export default Floor;
