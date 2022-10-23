import React from "react";
import Avatar from "@mui/material/Avatar";
export default function StoreImage() {
  return (
    <div className="">
      <div className="border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
        <Avatar
          sx={{ width: 56, height: 56 }}
          alt="Travis Howard"
          src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1650382539~exp=1650383139~hmac=9bc67e1e02313fde0838cc0b391b9aa2f8083a20b59732fedead98218d58357a&w=900"
        />
      </div>
      <p className=" text-sm text-center font-semibold ">khokon</p>
    </div>
  );
}
