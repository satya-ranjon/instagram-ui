import React, { useRef, useState } from "react";
import StoreImage from "./StoreImage";
import { LeftScroll, RightScroll } from "./LeftRightScrollButton";
import AddStory from "./AddStory";

export default function StoreBar() {
  const [isScroll, setIsScroll] = useState(false);

  const scrollRef = useRef();

  const scrollOnClick = (side) => {
    // setIsScroll(true);
    side === "right"
      ? (scrollRef.current.scrollLeft += 200)
      : (scrollRef.current.scrollLeft -= 200);
    scrollRef.current.scrollLeft < 199 ? setIsScroll(false) : setIsScroll(true);
  };
  return (
    <div className="relative">
      <LeftScroll isScroll={isScroll} scrollOnClick={scrollOnClick} />
      <div
        ref={scrollRef}
        className=" flex space-x-9 overflow-hidden  scroll-smooth overflow-x-scroll  relative "
        id="category"
      >
        <AddStory />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
        <StoreImage />
      </div>
      <RightScroll scrollOnClick={scrollOnClick} />
    </div>
  );
}
