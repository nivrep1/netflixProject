import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import TextField from "@mui/material/TextField";
import "../index.css";
import Footer from "../Components/Footer/Footer";
import LogoLogin from "../Components/LoginNavbar/LogoLogin";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/68c1b94a-de06-4de9-a958-1d4e5d804c4f/AZ-en-20221128-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="relative  w-full px-4 py-24 z-50">
      <LogoLogin/>
        <div className="max-w-[500px] h-[660px] mx-auto bg-black/75 text-white">
          <div className="max-w-[350px]  mx-auto py-16">
            <h1 className="text-3xl font-bold ">Sign Up</h1>
            <form className="w-full flex flex-col py-4" onSubmit={handleSubmit}>
              <TextField
                sx={{ border: "none", backgroundColor: "#333" }}
                style={{
                  marginBottom: "20px",
                }}
                InputProps={{
                  style: { color: "#fff" },
                }}
                type="text"
                required
                fullWidth
                className="bg-[#333] rounded mb-4"
                InputLabelProps={{
                  style: { color: "#8c8c8c" },
                }}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                variant="filled"
                color="warning"
              />
              <TextField
                sx={{ border: "none", backgroundColor: "#333" }}
                InputProps={{
                  style: { color: "#fff" },
                }}
                style={{
                  marginBottom: "20px",
                }}
                required
                fullWidth
                className="bg-[#333] rounded mb-4"
                InputLabelProps={{
                  style: { color: "#8c8c8c" },
                }}
                onChange={(e) => setPassword(e.target.value)}
                type="Password"
                label="Password"
                variant="filled"
                color="warning"
              />

              <button className="bg-[#e50914] py-3 my-6 rounded font-bold">
                Sign Up
              </button>
              <div className="flex text-sm text-gray-600 justify-between item-center">
                <p className="mr-2 ">
                  <input
                    className="mr-3  text-[#8c8c8c] "
                    type="checkbox"
                    name=""
                    id=""
                  />
                  Remember Me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-4">
                <span className="text-[#8c8c8c]">
                  Already subscribed to Netflix?
                </span>{" "}
                <Link to="/login">Sign in</Link>
              </p>
              <p className="text-[#8c8c8c] text-sm">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.Learn more.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
