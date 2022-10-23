import { Avatar } from "@mui/material";
import React from "react";

export default function UserList() {
  return (
    <div className="flex py-2 px-4 cursor-pointer transition-all duration-300 sm:hover:bg-neutral-100 justify-between text-neutral-600 sm:border-b-2">
      <div className=" my-auto flex space-x-3">
        <Avatar
          alt="Remy Sharp"
          src="https://img.freepik.com/free-photo/portrait-guy-with-colorful-neon-light-blue-studio-background-male-model-with-calm-serious-mood_155003-36962.jpg?t=st=1650662885~exp=1650663485~hmac=7fed3c0063e691a8f39a65e7b480038fb41dd291ed7ee95f9053a12587457cbc&w=900"
          className=" cursor-pointer"
        />
        <div>
          <p className=" font-semibold text-md ">Khokon dev</p>
          <p className=" text-[11px]">hellow😍</p>
        </div>
      </div>
      <p className="font-semibold text-sm my-auto">3.30</p>
    </div>
  );
}
