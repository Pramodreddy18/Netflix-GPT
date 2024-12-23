import React, { useState, useRef } from "react";
import Header from "./Header";
import { formValidate } from "../utils/formValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSing, setisSign] = useState(true);
  const [errormssg, seterrormssg] = useState(null);

  const toggleSigninup = () => {
    setisSign(!isSing);
  };
  const email = useRef(null);
  const password = useRef(null);
  const handlebutton = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = formValidate(email.current.value, password.current.value);
    seterrormssg(message);
    if (message) return;
    if (!isSing) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormssg(errorCode + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormssg(errorCode + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen md:w-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_small.jpg"
          alt="bg-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-10 bg-black w-full md:w-3/12  my-36 right-0 left-0 mx-auto text-white bg-opacity-75"
      >
        <h1 className="font-bold my-2 text-2xl ">
          {isSing ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSing && (
          <input
            type="text"
            placeholder="Enter Name"
            className="my-2 p-2 w-full rounded-sm bg-slate-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Emaail Address"
          className="my-2 p-2 w-full rounded-sm bg-slate-700"
        />
        <input
          ref={password}
          type="password"
          placeholder=" password"
          className="my-2 p-2 w-full rounded-sm bg-slate-700"
        />
        <p className="text-red-400 font-semibold">{errormssg}</p>
        <button
          onClick={handlebutton}
          className="bg-red-700 my-2 p-2 w-full rounded-sm"
        >
          {isSing ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSigninup} className="cursor-pointer">
          {isSing
            ? "New to Netflix? Sign up now"
            : "Already Registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
