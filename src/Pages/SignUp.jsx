import React, { useState } from "react";
import {Link,useNavigate} from "react-router-dom"
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {user,signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      await signUp(email,password)
      navigate('/')
    }
    catch (error){
      console.log(error);
    }
  }


  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/68c1b94a-de06-4de9-a958-1d4e5d804c4f/AZ-en-20221128-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[660px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold ">Sign Up</h1>
            <form className="w-full flex flex-col py-4" onSubmit={handleSubmit}>
              <input
              onChange={(e)=>setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-600 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
               onChange={(e)=>setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
                autoCapitalize="current-password"
              />
           
            <button className="bg-red-600 py-3 my-6 rounded font-bold">
              Sign Up
            </button>
            <div className="flex text-sm text-gray-600 justify-between item-center">
              <p className="mr-2 ">
                <input type="checkbox" name="" id="" />
                Remember Me
              </p>
              <p>Need Help?</p>
            </div>
            <p className="py-4">
              <span className="text-gray-600">
                Already subscribed to Netflix?
              </span>{' '}
              
              <Link to = "/login">
              Sign in 
              </Link>
            </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
