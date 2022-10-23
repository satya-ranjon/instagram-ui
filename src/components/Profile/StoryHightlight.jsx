import React from "react";
import StoreBar from "../StoreBar";
import { MdOutlineSort } from "react-icons/md";

export default function StoryHightlight() {
  return (
    <div>
      <div className="flex justify-between w-full mt-10">
        <div className="text-xl font-semibold my-5 text-neutral-600">
          Story Hightlight
        </div>
        <div className="button__btn font-semibold text-[11px] flex justify-between space-x-3 ">
          <div>SORT BY </div>
          <MdOutlineSort className=" text-sm my-auto" />
        </div>
      </div>
      <StoreBar />
    </div>
  );
}
