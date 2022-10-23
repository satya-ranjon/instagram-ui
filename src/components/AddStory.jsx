import React from "react";
import Avatar from "@mui/material/Avatar";
import { IoMdAddCircle } from "react-icons/io";

export default function AddStory() {
  return (
    <div className="">
      <div className=" border-2 cursor-pointer  rounded-full relative p-1 my-auto border-gray-400 ">
        <Avatar
          alt="Travis Howard"
          src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
          sx={{ width: 56, height: 56 }}
        />
        <IoMdAddCircle className="text-xl text-blue-500 absolute -right-2 -bottom-2 cursor-pointer " />
      </div>
      <p className="text-sm text-center font-semibold text-gray-500 ">
        Your Story
      </p>
    </div>
  );
}
