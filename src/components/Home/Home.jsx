import React, { useEffect, useState } from "react";
import DeasignButton from "../DeasignButton";
import { IoIosAddCircle } from "react-icons/io";

import PostList from "./PostList";
import NewPostModel from "./NewPostModel";

export default function Home() {
  const [griddesign, setGriddesign] = useState("");
  const [imgdesign, setImgdesign] = useState("");
  const [NewPostOpen, setNewPostOpen] = React.useState(false);

  useEffect(() => {
    const gridDe = localStorage.getItem("grid");
    if (!gridDe) localStorage.setItem("grid", "grid___two");
    setGriddesign(gridDe);
    const imagDe = localStorage.getItem("imgDe");
    if (!imagDe) localStorage.setItem("imgDe", "img__two");
    setImgdesign(imagDe);
  }, []);

  const GridChange = (grid) => {
    switch (grid) {
      case "THREE":
        setGriddesign("grid___three");
        setImgdesign("img__three");
        localStorage.setItem("grid", "grid___three");
        localStorage.setItem("imgDe", "img__three");
        break;
      case "TWO":
        setGriddesign("grid___two");
        setImgdesign("img__two");
        localStorage.setItem("grid", "grid___two");
        localStorage.setItem("imgDe", "img__two");
        break;
      case "ONE":
        setGriddesign("grid___one");
        setImgdesign("img__one");
        localStorage.setItem("grid", "grid___one");
        localStorage.setItem("imgDe", "img__one");
        break;
    }
  };
  return (
    <>
      <PostList griddesign={griddesign} imgdesign={imgdesign} />
      <DeasignButton GridChange={GridChange} setOpen={setNewPostOpen} />
      <NewPostModel open={NewPostOpen} setOpen={setNewPostOpen} />
      <div className="fixed right-8 bottom-7 bg-gray-100 rounded-full overflow-hidden p-2">
        <IoIosAddCircle
          className="text-3xl  sm:hidden cursor-pointer text-[rgb(176,81,81)]"
          onClick={() => setNewPostOpen((prv) => !prv)}
        />
      </div>
    </>
  );
}
