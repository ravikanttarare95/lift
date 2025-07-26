import Lift from "./Lift";
import Button from "./Button";

function Floor({ floorNum, activeFloor, setActiveFloor, isDisable }) {
  const isActive = activeFloor === floorNum;

  return (
    <div className="flex items-center  gap-5">
      {[floorNum].map((btn) => {
        return (
          <Button
            key={btn}
            isActive={isActive}
            btnName={btn}
            onclick={() => {
              setActiveFloor(floorNum);
            }}
            disabled={isDisable}
          />
        );
      })}
      <Lift floorNum={floorNum} isActive={isActive} />
    </div>
  );
}

export default Floor;
