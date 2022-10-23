import React from "react";
import InboxHader from "./InboxHader";
import MesseageBox from "./MesseageBox";
import SideBar from "./SideBar";

export default function InboxContainer() {
  return (
    <div className="">
      <InboxHader />
      <div className="flex justify-between 2xl:px-52">
        <SideBar />
        <MesseageBox />
      </div>
    </div>
  );
}
