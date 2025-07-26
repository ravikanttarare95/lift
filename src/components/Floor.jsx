import Lift from "./Lift";
import Button from "./Button";

function Floor({ floorNum, activeBtn, setActiveBtn, isDisable }) {
  const isActive = activeBtn === floorNum;

  return (
    <div className="flex items-center  gap-5">
      <Button
        isActive={isActive}
        btnName={floorNum}
        onclick={() => {
          setActiveBtn(floorNum);
        }}
        disabled={isDisable}
      />

      <Lift floorNum={floorNum} isActive={isActive} />
    </div>
  );
}

export default Floor;
