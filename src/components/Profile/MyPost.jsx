import React from "react";
import { IoIosPhotos } from "react-icons/io";
export default function MyPost() {
  return (
    <div className=" h-32 xl:h-40 bg-red-50 rounded-md overflow-hidden relative cursor-pointer">
      <img
        className=" h-full w-full "
        src="https://img.freepik.com/free-photo/portrait-beautiful-smiling-girl-black-dress_171337-11486.jpg?t=st=1650723658~exp=1650724258~hmac=cd70ac9e6038b5baad425089e92c779347fb2536aa94764c4cb9173cd49260ea&w=740"
        alt=""
      />
      <IoIosPhotos className=" absolute top-1 right-3 text-white" />
    </div>
  );
}
