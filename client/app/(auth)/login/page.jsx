"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Register from "../../../components/Register";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../../../components/UserContext";
import Details from "../../details/page";

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const {userData} = useContext(UserContext);

  return (
    <main className="main login">
        
        {session?
          userData? <Details/> : <Register />
          : ""
        }
 
      {!session ? (
        <div class="main google-btn" onClick={signIn}>
          <div class="google-icon-wrapper">
            <img class="google-icon" src="https://developers.google.com/static/identity/images/btn_google_signin_dark_normal_web.png"/>
          </div>
            <p class="btn-text"><b></b></p>
        </div>
        
      ) : (
        <button onClick={signOut}>Sign Out</button>
      )}
    </main>
  );
};

export default Login;
