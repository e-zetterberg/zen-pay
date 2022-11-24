"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Register from "../../../components/Register";
import { useContext } from "react";
import { UserContext } from "../../../components/UserContext";
import Details from "../../details/page";

const Login = () => {
  const { data: session } = useSession();
  const {userData} = useContext(UserContext);

  return (
    <main className="main login">
        
        {session?
          userData? <Details/> : <Register />
          : "Hello user, please sign in"
        }
 
      {!session ? (
        <button onClick={signIn}>Sign In</button>
      ) : (
        <button onClick={signOut}>Sign Out</button>
      )}
    </main>
  );
};

export default Login;
