import { Avatar } from "@mui/material";
import React from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import PostComment from "./PostComment";

export default function PostList({ imgdesign }) {
  const [commentOpen, setCommentOpen] = React.useState(false);

  return (
    <div className=" my-4 relative">
      <img
        className={` ${imgdesign} cursor-pointer`}
        src="https://img.freepik.com/free-photo/tulips-bouquet-pink-background-with-copyspace_24972-271.jpg?t=st=1653233359~exp=1653233959~hmac=fd002352fc9807d6831d8c1759319ae313e9d18ad3daf1e40535772c2f279537&w=996"
        alt=""
      />
      <div className="flex justify-between p-3 pb-2 border-b-2 border-gray-300 ">
        <p className=" cursor-pointer">25k likes</p>
        <p className=" cursor-pointer">25k Comments</p>
      </div>
      <div className="p-3 flex justify-between ">
        <div className="flex space-x-4">
          <div className=" w-fit border-2 cursor-pointer rounded-full p-1 my-auto border-[rgb(176,81,81)] ">
            <Avatar
              alt="Travis Howard"
              sx={{ width: 30, height: 30 }}
              src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=971&q=80"
            />
          </div>
          <div
            className={`
              ${
                (imgdesign === "img__two" &&
                  `hidden sm:hidden md:block 3sm:block 4sm:hidden 5sm:block `) ||
                (imgdesign === "img__three" &&
                  `hidden 3sm:block 4sm:hidden 2lg:block`) ||
                (imgdesign === "img__one" && `hidden 3sm:block `)
              } `}
          >
            <p className="text-md cursor-pointer ">Khokon</p>
            <p className="text-sm  text-gray-400">3 hor ago</p>
          </div>
        </div>
        {/* // icon section  */}
        <div className="flex space-x-4 my-auto">
          {/* <AiFillLike className="text-2xl my-auto cursor-pointer text-blue-500" /> */}
          <AiOutlineLike className="text-2xl my-auto cursor-pointer " />
          <FaRegComment
            className="text-2xl my-auto cursor-pointer"
            onClick={() => setCommentOpen((prv) => !prv)}
          />
          {/* <MdFavorite className="text-2xl my-auto cursor-pointer text-red-500" /> */}
          <MdFavoriteBorder className="text-2xl my-auto cursor-pointer " />
          <FiMoreHorizontal className="text-2xl my-auto cursor-pointer " />
        </div>
      </div>
      <PostComment commentOpen={commentOpen} />
      {/* <div className=" bg-slate-50 border-2 rounded-full">
        <Comment />
      </div> */}
    </div>
  );
}
