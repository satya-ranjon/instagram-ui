import React from "react";
import PostDetielsContainer from "../PostDetiels/PostDetielsContainer";
import ExpolorPost from "./ExpolorPost";

export default function ExpolorContainer() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className=" mt-[8rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-5 sm:px-20">
          {/* <div className="video__v">
          <ExpolorPost />
        </div> */}
          <div className="image__i">
            <ExpolorPost setOpen={setOpen} />
          </div>
          <div className="image__i">
            <ExpolorPost setOpen={setOpen} />
          </div>
          <div className="image__i">
            <ExpolorPost setOpen={setOpen} />
          </div>
          <div className="image__i">
            <ExpolorPost setOpen={setOpen} />
          </div>
          <div className="image__i">
            <ExpolorPost setOpen={setOpen} />
          </div>
          <div className="image__i">
            <ExpolorPost setOpen={setOpen} />
          </div>
        </div>
      </div>
      <PostDetielsContainer setOpen={setOpen} open={open} />
    </>
  );
}
