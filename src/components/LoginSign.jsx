import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import facebook from "../Assets/image/facebook.png";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAuth } from "../Context/AuthContext";

export default function LoginSign() {
  const { pathname } = useLocation();
  const [passwordShow, setPassowrdShow] = useState(false);
  const [username, setUsername] = useState("demo");
  const [password, setPassword] = useState("demo");
  const [email, setEmail] = useState("demo@gmail.com");
  const { signup, login, currentUser, googleAuth, facebookAuth } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  async function handelSubmit(e) {
    e.preventDefault();
    if (pathname === "/signup") {
      if (
        password.length >= 4 &&
        username.length > 0 &&
        email.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        try {
          setError("");
          setLoading(false);
          await signup(email, password, username);
          navigate("/");
        } catch (error) {
          console.log(error.message);
          setLoading(false);
          setError("Failed to create an answer");
        }
      }
      setError("Failed to fild");
    } else {
      if (
        email.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) &&
        password > 4
      )
        try {
          setError("");
          setLoading(true);
          await login(email, password);
          navigate("/");
        } catch (error) {
          setLoading(false);
          setError("Failed to login!");
        }
      setError("Failed to fild");
    }
  }
  if (currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <div className=" w-full h-screen">
      <div className="login__box">
        <div className=" space-y-5">
          <form className=" space-y-3" onSubmit={handelSubmit}>
            {error && <Alert severity="error">{error}</Alert>}

            {pathname === "/login" || (
              <TextField
                className="w-full"
                id="filled-basic"
                onChange={(e) => setUsername(e.target.value)}
                label="Username *"
                variant="filled"
                value={username}
              />
            )}
            <br />
            <TextField
              className="w-full"
              id="filled-basic"
              label="Email *"
              onChange={(e) => setEmail(e.target.value)}
              variant="filled"
              value={email}
            />
            <br />

            <FormControl variant="filled" className="w-full">
              <InputLabel htmlFor="filled-adornment-password">
                Password *
              </InputLabel>
              <FilledInput
                className="w-full"
                id="filled-adornment-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={passwordShow ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => setPassowrdShow((prv) => !prv)}>
                      {passwordShow ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <br />
            <Button
              disabled={loading}
              type="submit"
              className="w-full"
              variant="outlined">
              {pathname === "/login" ? "Login" : " Sign Up"}
            </Button>
          </form>
          <div className="flex justify-between space-x-2 text-gray-400">
            <div className="w-full h-[1px] bg-gray-300 my-auto"></div>
            <div className="">Or</div>
            <div className="w-full h-[1px] bg-gray-300 my-auto"></div>
          </div>
          <Button
            variant="text"
            className=" w-full flex space-x-2"
            onClick={() => googleAuth()}>
            <FcGoogle className=" text-2xl" />
            <p className="">Google</p>
          </Button>
          <Button
            variant="text"
            className=" w-full flex space-x-2"
            onClick={() => facebookAuth()}>
            <img src={facebook} alt="" />
            <p className=" ">Facebook</p>
          </Button>
        </div>
        <div className="w-ful text-sm p-2 mt-4 text-center">
          <p>
            {pathname === "/login" ? " Don't " : " Already"} have an account?
            <Link
              to={`${pathname === "/login" ? "/signup" : "/login"}`}
              className=" text-blue-500 font-semibold cursor-pointer">
              {pathname === "/login" ? " Sign Up" : " Login"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
