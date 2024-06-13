import { LiaAngleRightSolid } from "react-icons/lia";

function GreenHeader({ h2 }) {
  return (
    <div className="bg-green text-secondary w-full rounded-t-[16px] py-6 flex justify-between items-center px-5 mb-10">
      <h2 className="font-semibold lgss:text-[1.5rem]">{h2}</h2>
      <div className="flex justify-center items-center gap-2">
        <p>SEE ALL</p>
        <LiaAngleRightSolid />
      </div>
    </div>
  );
}

export default GreenHeader