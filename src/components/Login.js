import React, { useRef, useState } from "react";
import Header from "./Header";
import backLogo from "../img/background.jpg";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const error = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(error);
    if (error) return;

    if (!isSignInForm) {
      //Sign up

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            //photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute text-white bg-black bg-opacity-70 my-36 mx-auto right-0 left-0 w-3/12 p-14"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="w-full p-2 my-4 bg-slate-400 placeholder:text-white rounded-md "
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          ref={email}
          className="w-full p-2 my-4 bg-slate-400 placeholder:text-white rounded-md "
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="w-full p-2 my-4 bg-slate-400 placeholder:text-white rounded-md"
          type="text"
          placeholder="Password"
        />
        <p className="text-red-800 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-800 w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
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
