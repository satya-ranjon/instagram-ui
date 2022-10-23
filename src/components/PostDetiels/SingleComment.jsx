import { Avatar } from "@mui/material";
import React from "react";

export default function SingleComment() {
  return (
    <div>
      <div className="flex space-x-3">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="cursor-pointer"
        />
        <div className=" space-y-1">
          <div className="space-x-3">
            <span className="font-semibold cursor-pointer">Mary jae</span>
            <span>this is very good😀 very nice good and very good</span>
          </div>
          <div className="flex space-x-2 text-[13px] font-semibold">
            <p>3 min</p>
            <p>3 Likes</p>
            <p className=" cursor-pointer hover:text-neutral-600">Reply</p>
          </div>
        </div>
      </div>
    </div>
  );
}
