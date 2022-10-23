import React from "react";
import CloseBtn from "./closeBtn";
import Button from "@mui/material/Button";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

export default function newPostSectionOne({ setOpen }) {
  return (
    <div>
      <CloseBtn setOpen={setOpen} />
      <div className=" text-neutral-500 ">
        <div className=" font-semibold  text-center border-b-2 pb-2">
          Create new post
        </div>
        <div className="w-full flex flex-col my-12 sm:my-20 justify-center space-y-6">
          <MdOutlineAddPhotoAlternate className="text-8xl mx-auto  my-auto" />
          <p className=" text-center text-xl sm:text-3xl font-semibold">
            Drag photos and videos here
          </p>
          <div className="mx-auto">
            <Button variant="contained" size="small" color="primary">
              Select from computer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
