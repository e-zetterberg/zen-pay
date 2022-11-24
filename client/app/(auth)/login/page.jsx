"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Register from "../../../components/Register";
import { useUserContext } from "../../../components/UserContext";
import Details from "../../details/page";

const Login = () => {
  const { data: session } = useSession();
  const {userData, clearUserData} = useUserContext();
  console.log(userData);
  console.log(session);

  const handleClick = (e)=>{
    e.preventDefault();
    clearUserData();
    signOut
  }
  return (
    <main className="main login">
      <div></div>
        
        {session?
          userData? <Details/> : <Register />
          : "Hello user, please sign in"
        }
 
      {!session ? (
       
        <button onClick={signIn}>Sign In</button>
      ) : (
        <button onClick={(e)=> handleClick(e)}>Sign Out</button>
      )}
    </main>
  );
};

export default Login;
