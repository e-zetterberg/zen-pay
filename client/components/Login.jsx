"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  return (
    <main className="main login">
      <div>
      {!session ? (
        <button onClick={signIn}>Sign In</button>
      ) : (
        <button onClick={signOut}>Sign Out</button>
      )}
      </div>
    </main>
  );
};

export default Login;
