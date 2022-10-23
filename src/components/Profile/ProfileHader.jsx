import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { IconButton } from "@mui/material";

export default function ProfileHader() {
  return (
    <div className="flex justify-between mt-2">
      <Link
        className=" text-neutral-400 hover:text-neutral-600 transition-all duration-300 cursor-pointer text-3xl my-auto sm:hidden"
        to="/"
      >
        <BiArrowBack />
      </Link>
      <div className="bg-gray-100 p-2 rounded-full flex px-5 ">
        <BiSearch className="text-xl my-auto text-neutral-500" />
        <input
          type="text"
          placeholder="Search"
          className="p-1 bg-transparent outline-none"
        />
      </div>
      <IconButton color="primary" aria-label="upload picture" component="span">
        <IoMdNotificationsOutline className="text-xl my-auto text-neutral-500 " />
      </IconButton>
    </div>
  );
}
