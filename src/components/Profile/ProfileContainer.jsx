import React from "react";
import ProfileSideBar from "./ProfileSideBar";
import PhotoFeed from "./PhotoFeed";
import StoryHightlight from "./StoryHightlight";
import ProfileHader from "./ProfileHader";
import ProfileInfo from "./ProfileInfo";

export default function ProfileContainer() {
  return (
    <div className="flex ">
      <ProfileSideBar />
      <div className="w-full h-screen">
        <div className="flex justify-center w-full ">
          <div className="profile_section">
            <ProfileHader />
            <div className=" sm:hidden">
              <div className="flex items-center flex-col text-neutral-600 space-y-5 text-center mt-10">
                <ProfileInfo />
              </div>
            </div>
            <StoryHightlight />
            <PhotoFeed />
          </div>
        </div>
      </div>
    </div>
  );
}
