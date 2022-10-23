import React, { useEffect } from "react";
import { MdSend } from "react-icons/md";

export default function PostComment({ commentOpen }) {
  const inputRef = React.useRef(null);

  useEffect(() => {
    if (commentOpen) {
      inputRef.current.focus();
    }
  }, [commentOpen]);
  return (
    <div
      className={`rounded-full overflow-hidden text-neutral-600 absolute w-full duration-200 transition-all flex bg-[#f0f2f5] ${
        commentOpen ? " -bottom-8  opacity-100 " : " bottom-12 opacity-0"
      } `}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder=" Write a comment..."
        className=" w-full bg-[#f0f2f5] p-2 outline-none text-sm placeholder:text-sm placeholder:text-neutral-600 px-4"
      />
      <MdSend className=" mr-4 cursor-pointer text-3xl my-auto" />
    </div>
  );
}
