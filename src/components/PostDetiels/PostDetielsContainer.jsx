import * as React from "react";
import Dialog from "@mui/material/Dialog";
import PostDetielPost from "./PostDetielPost";
import PostDetielsHader from "./PostDetielsHader";
import CommentDetiels from "./CommentDetiels";
import PostDitelsFooter from "./PostDitelsFooter";
import { GrClose } from "react-icons/gr";

export default function PostDetielsContainer({ open, setOpen }) {
  // const [open, setOpen] = React.useState(true);
  return (
    <>
      <div className="">
        <button className="" onClick={() => setOpen((prv) => !prv)}>
          open
        </button>
        <Dialog
          open={open}
          maxWidth=" xl"
          onClose={() => setOpen((prv) => !prv)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <button
            className=" absolute top-5 left-5 text-2xl hover:rotate-180  transition-all duration-300"
            onClick={() => setOpen((prv) => !prv)}
          >
            <GrClose />
          </button>
          <div className="post__detiels_model">
            <PostDetielPost />
            <div className="h-full w-full lg:w-[40rem] text-neutral-600 ">
              <PostDetielsHader />
              <CommentDetiels />
              <PostDitelsFooter />
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}
