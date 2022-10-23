import React from "react";
import { BsGrid3X3Gap, BsGrid } from "react-icons/bs";
import { VscDiffAdded } from "react-icons/vsc";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";

export const grid = () => {};

function DeasignButton({ GridChange, setOpen }) {
  const gridDe = localStorage.getItem("grid");

  return (
    <div className="hidden sm:block">
      <div className=" fixed  h-[400px] right-5 lg:right-10 top-[35%] text-2xl text-gray-500 flex justify-between  flex-col ">
        <div className=" space-y-9 mx-auto">
          <div
            className={`${
              gridDe === "grid___three" &&
              `border-b-2 border-neutral-500 pb-2 hidden md:block transition-all duration-300`
            }`}
          >
            <BsGrid3X3Gap
              onClick={() => GridChange("THREE")}
              className="text-neutral-500 cursor-pointer hidden md:block "
            />
          </div>
          <div
            className={`${
              gridDe === "grid___two" &&
              `border-b-2 border-neutral-500 pb-2 transition-all duration-300`
            }`}
          >
            <BsGrid
              onClick={() => GridChange("TWO")}
              className="text-gray-600 cursor-pointer"
            />
          </div>
          <div
            className={`${
              gridDe === "grid___one" &&
              `border-b-2 border-neutral-500 pb-2 transition-all duration-300`
            }`}
          >
            <SplitscreenIcon
              onClick={() => GridChange("ONE")}
              sx={{ fontSize: 25 }}
              className="text-neutral-500  cursor-pointer"
            />
          </div>
        </div>
        <VscDiffAdded
          className="text-4xl cursor-pointer text-[rgb(176,81,81)]"
          onClick={() => setOpen((prv) => !prv)}
        />
      </div>
    </div>
  );
}
export default React.memo(DeasignButton);
