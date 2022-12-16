import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "../index.css";
import LogoLogin from "../Components/LoginNavbar/LogoLogin";
import TextField from "@mui/material/TextField";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-screen">
   

      <img
        className="hidden sm:block absolute w-full h-[1050px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/68c1b94a-de06-4de9-a958-1d4e5d804c4f/AZ-en-20221128-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
     
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="relative w-full px-4 py-24 z-50">
        <LogoLogin/>
        <div className="max-w-[500px] h-[660px] mx-auto bg-black/75 text-white">
          <div className="max-w-[350px]  mx-auto py-16">
            <h1 className="text-3xl font-bold ">Sign In</h1>
            {error ? (
              <p className="rounded p-3 bg-[#e87c03] my-4">
                Sorry, we can't find an account with this email address. Please
                try again or{" "}
                <span className="hover:underline">create a new account.</span>
              </p>
            ) : null}
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
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
                Sign In
              </button>
              <div className="flex text-sm text-gray-600 justify-between item-center">
                <p className="mr-2 ">
                  <input className="mr-3 " type="checkbox" />
                  Remember Me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-4">
                <span className="text-gray-600 mr-2">New to Netflix?</span>
                <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
