import React, { useState } from "react";
import Instgram from "../../Assets/image/instragm1.png";
import { AiOutlineClose } from "react-icons/ai";
import SingleStoryViwer from "./SingleStoryViwer";

export default function StoryPage() {
  const [active, setActive] = useState(true);

  const activeDesign =
    "border-2 fixed top-0 translate-y-[10%]   duration-300 transition-all overflow-hidden rounded-md p-2 w-[400px] h-[780px]";
  const leftSideDesign =
    "border-2 overflow-hidden rounded-md  duration-300 transition-all p-2 w-[300px] h-[480px]  absolute left-[20%] top-20";
  const RightSideDesign =
    "border-2 overflow-hidden rounded-md  duration-300 transition-all p-2 w-[300px] h-[480px]  absolute right-[20%] top-20";

  return (
    <div className="bg-[#1a1a1a] h-screen w-full ">
      <div className=" absolute top-5 left-5 ">
        <img src={Instgram} alt="" />
      </div>
      <div className="absolute cursor-pointer top-7 right-10 text-4xl text-white">
        <AiOutlineClose />
      </div>

      <div className="fixed w-full h-[600px] bg-[#ff00001c] top-[20%] ">
        <div className="flex justify-center">
          <div className={leftSideDesign}>
            <div className="">
              <img
                className=" h-full"
                src="https://images.pexels.com/photos/11161043/pexels-photo-11161043.jpeg?cs=srgb&dl=pexels-merve-%C5%9Fahin-11161043.jpg&fm=jpg"
                alt=""
              />
            </div>
          </div>

          <div className={activeDesign}>
            <div className="">
              <img
                className=""
                src="https://images.pexels.com/photos/11672681/pexels-photo-11672681.jpeg?cs=srgb&dl=pexels-jan-van-der-wolf-11672681.jpg&fm=jpg"
                alt=""
              />
            </div>
          </div>

          <div className={RightSideDesign}>
            <div className="">
              <img
                className=" h-full"
                src="https://images.pexels.com/photos/11591317/pexels-photo-11591317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
