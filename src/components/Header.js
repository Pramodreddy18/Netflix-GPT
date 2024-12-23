import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchview } from "../utils/gptSlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gpt=useSelector((store)=>store.gpt);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
       
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  },[]);

  const handleGptSearch=()=>{
    dispatch(toggleGptSearchview());
    
  }
  return (
    <div>
      <div className="absolute w-screen px-32  py-2 bg-gradient-to-b from-black z-10 flex items-center  justify-between flex-col md:flex-row">
        <img 
          className="w-44 m-auto md:m-0"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        {user && (
         <div className="flex  gap-2 items-center ">
         <button onClick={handleGptSearch} className="bg-slate-500 w-full md:w-28 h-10 flex items-center justify-center text-[10px] md:text-xs  px-4 py-2 rounded-md"> {gpt.showGptSearch ? "home":"Gpt Search ⌕"}</button>
          <button
            onClick={handleSignout}
             className="font-bold bg-red-500 w-full md:w-24 h-10 flex items-center justify-center px-4 md:p-auto py-2 text-xs rounded-md"
          >
            Sign Out
          </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
