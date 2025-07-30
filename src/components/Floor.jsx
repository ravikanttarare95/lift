import Lift from "./Lift";
import Button from "./Button";

function Floor({
  floorNum,
  currentFloor,
  isDisable,
  moveToTarget,
  setFloorQueue,
  activeBtn,
}) {
  return (
    <div className="flex items-center  gap-10 mt-1">
      <Lift floorNum={floorNum} isActive={currentFloor === floorNum} />

      <div className="h-15 flex flex-col justify-around">
        <Button
          isActive={
            activeBtn.btnFloor === floorNum && activeBtn.direction === "up"
          }
          btnName={"⮝"}
          onclick={() => {
            moveToTarget(floorNum, "up");
            setFloorQueue(floorNum);
          }}
          disabled={isDisable}
        />
        <Button
          isActive={
            activeBtn.btnFloor === floorNum && activeBtn.direction === "down"
          }
          btnName={"⮟"}
          onclick={() => {
            moveToTarget(floorNum, "down");
            setFloorQueue(floorNum);
          }}
          disabled={isDisable}
        />
      </div>
      <p className="text-xl">{currentFloor}</p>
    </div>
  );
}

export default Floor;
