import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import Hader from "../Header";

export default function PrivateRoutes() {
  const { pathname } = useLocation();
  const { currentUser } = useAuth();

  return currentUser ? (
    <>
      {(pathname === "/" && <Hader />) ||
        (pathname === "/expolor" && <Hader />)}
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}
