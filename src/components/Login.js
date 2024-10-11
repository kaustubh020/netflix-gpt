import React, { useState } from "react";
import Header from "./Header";
import backLogo from "../img/background.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  function toggleSignIn() {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img
          className="w-full left-0 right-0 mx-auto"
          src={backLogo}
          alt="background-img"
        />
      </div>
      <form className="absolute text-white bg-black bg-opacity-70 my-36 mx-auto right-0 left-0 w-3/12 p-14">
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          className="w-full p-2 my-4 bg-slate-400 placeholder:text-white rounded-md "
          type="text"
          placeholder="Email"
        />
        <input
          className="w-full p-2 my-4 bg-slate-400 placeholder:text-white rounded-md"
          type="text"
          placeholder="Password"
        />
        <button className="p-2 my-6 bg-red-800 w-full rounded-md">
          Sign In
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
