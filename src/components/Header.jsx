import React from "react";
import Logo from "../Assets/Logo";
import TopMenu from "./TopMenu";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { FiSend } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Hader() {
  const [openSearchBar, setOpenSideBar] = React.useState(false);
  const { currentUser } = useAuth();

  return (
    <>
      <div className="flex fixed  top-0 w-full z-10 bg-white  justify-center 2sm:justify-between p-10 pb-5 text-[#3a3637]">
        <div className="hidden sm:block">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <TopMenu setOpenSideBar={setOpenSideBar} />

        <div className="pl-3 ">
          <Stack direction="row" spacing={3}>
            <Link className="text-3xl my-auto cursor-pointer" to="inbox">
              <FiSend />
            </Link>
            <Link to="profile" className=" cursor-pointer">
              <Avatar
                alt={currentUser.displayName}
                src={currentUser.photoURL}
              />
            </Link>
          </Stack>
        </div>
      </div>
      <SearchBar
        openSearchBar={openSearchBar}
        setOpenSideBar={setOpenSideBar}
      />
    </>
  );
}
