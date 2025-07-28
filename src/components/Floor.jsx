import Lift from "./Lift";
import Button from "./Button";

function Floor({ floorNum, currentFloor, isDisable, moving }) {
  return (
    <div className="flex items-center  gap-5">
      <Button
        isActive={currentFloor === floorNum}
        btnName={floorNum}
        onclick={() => {
          moving(floorNum);
        }}
        disabled={isDisable}
      />

      <Lift floorNum={floorNum} isActive={currentFloor === floorNum} />
    </div>
  );
}

export default Floor;
