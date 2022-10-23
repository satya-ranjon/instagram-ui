import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useAuth } from "../../Context/AuthContext";
import ProfileImgUpLoad from "./ProfileImgUpLoad";

export default function ProfileInfo() {
  const { currentUser } = useAuth();
  const [upimgOpen, setUpimgOpen] = useState(false);
  console.log(currentUser);
  return (
    <>
      <div
        className="rounded-full overflow-hidden relative profile_img cursor-pointer "
        onClick={() => setUpimgOpen((prv) => !prv)}
      >
        <Avatar
          alt={currentUser.displayName}
          src={currentUser.photoURL}
          sx={{ width: 96, height: 96 }}
        />
        <div className=" absolute left-0  h-full w-full bg-[#0000006c] z-10 flex justify-center cursor-pointer hover__profile transition-all duration-300">
          <AiOutlineCloudUpload className="z-10 text-white text-2xl my-auto" />
        </div>
      </div>

      <div className=" font-semibold ">
        <div className=" text-xl">{currentUser.displayName}</div>
        <div className=" text-[12px] text-neutral-400">Dhaka BN</div>
      </div>
      <div className=" flex justify-between  w-full">
        <div className="button__btn">Follow</div>
        <div className="button__btn">Messeage</div>
        <a href={`mailto:${currentUser.email}`} className="button__btn">
          Email
        </a>
      </div>
      <div className="flex justify-between w-full font-semibold ">
        <div className="">
          <div>0</div>
          <div className="text-neutral-400">Post</div>
        </div>
        <div className="">
          <div>0</div>
          <div className="text-neutral-400">Follower</div>
        </div>
        <div className="">
          <div>0</div>
          <div className="text-neutral-400">Following</div>
        </div>
      </div>
      <div className=" text-left">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est non
        placeat neque 😍😍🥖
      </div>
      <ProfileImgUpLoad upimgOpen={upimgOpen} setUpimgOpen={setUpimgOpen} />
    </>
  );
}
