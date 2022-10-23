import React from "react";
import ProfileSideBarHader from "./ProfileSideBarHader";
import { FiLogOut } from "react-icons/fi";
import ProfileInfo from "./ProfileInfo";
import { useAuth } from "../../Context/AuthContext";

export default function ProfileSideBar() {
  const { logout } = useAuth();
  return (
    <div className=" border-r-2 h-screen w-[40rem] hidden sm:block">
      <ProfileSideBarHader />
      <div className="py-10 px-8 mt-10">
        <div className="flex items-center flex-col text-neutral-600 space-y-5 text-center">
          <ProfileInfo />
          <button className="button__btn flex space-x-2 absolute bottom-32">
            <FiLogOut className="my-auto" />
            <p onClick={() => logout()}> Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
}
