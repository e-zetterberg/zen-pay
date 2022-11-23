"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Register from "../../../components/Register";

const Login = () => {
  const { data: session } = useSession();

  return (
    <main className="main login">
      <div></div>
   
        {/* {session ? `Hello ${session.user.name}` : "Hello user, please sign in"} */}
        {session ? <Register /> : "Hello user, please sign in"}
 
      {!session ? (
        <button onClick={signIn}>Sign In</button>
      ) : (
        <button onClick={signOut}>Sign Out</button>
      )}
    </main>
  );
};

export default Login;
