import React from "react";
import Stack from "@mui/material/Stack";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore, MdFavoriteBorder } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function TopMenu({ setOpenSideBar }) {
  return (
    <Stack
      direction="row"
      className="text-3xl my-auto space-x-5 2sm:space-x-12"
    >
      <Link to="/">
        <BiHomeAlt className=" cursor-pointer" />
      </Link>
      <FiSearch
        className=" cursor-pointer"
        onClick={() => setOpenSideBar((prv) => !prv)}
      />
      <Link to="/expolor">
        <MdOutlineExplore className=" cursor-pointer" />
      </Link>
      <MdFavoriteBorder className=" cursor-pointer" />
    </Stack>
  );
}
