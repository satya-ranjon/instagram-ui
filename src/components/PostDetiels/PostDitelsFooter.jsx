import * as React from "react";
import { GrFavorite } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsBookmarks } from "react-icons/bs";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import Comment from "./Comment";

function PostDitelsFooter() {
  const [commentFocus, setCommentFocus] = React.useState(false);
  console.log("PostDitelsFooter");
  console.log(commentFocus);
  return (
    <div className=" p-3 text-neutral-600 border-t-2">
      <div>
        <div className="flex justify-between text-xl">
          <div className="flex space-x-4 ">
            <MdFavoriteBorder className=" cursor-pointer text-2xl " />
            <MdFavorite className=" text-2xl cursor-pointer text-red-600 " />
            <FaRegComment
              className=" cursor-pointer"
              onClick={() => setCommentFocus(true)}
            />
            <FiSend className=" cursor-pointer" />
          </div>
          <BsBookmarks className=" cursor-pointer text-2xl" />
        </div>
        <p className=" font-semibold text-sm py-3">1521 likes</p>
      </div>

      <Comment commentFocus={commentFocus} />
    </div>
  );
}

export default React.memo(PostDitelsFooter);
