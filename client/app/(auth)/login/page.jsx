"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Register from "../../../components/Register";
import { useRouter } from "next/navigation";
import { useUserContext } from "../../../components/UserContext";
import Details from "../../details/page";
import "../../../styles/login.css";
import Footer from "../../../components/Footer"

const Login = ( props ) => {
  const router = useRouter();
  const { data: session } = useSession();
  const {userData, clearUserData} = useUserContext();
  console.log(userData);
  console.log(session);

  const handleClick = (e)=>{
    e.preventDefault();
    clearUserData();
    signOut
  }

  const showFooter = router.pathname === "/login" ? false : true;

  return (
    <main className="main login">
        
        {session?
          userData.status !== 404? <Details/> : <Register />
          : "Hello user, please sign in"
        }
 
      {!session ? (
        <div className="google-btn" onClick={signIn}>
          <div className="google-icon-wrapper">
            <img className="google-icon" src="https://developers.google.com/static/identity/images/btn_google_signin_dark_normal_web.png"/>
          </div>
            <p className="btn-text"><b></b></p>
        </div>
        
      ) : (
        <button onClick={(e)=> handleClick(e)}>Sign Out</button>
      )}
      {showFooter && <Footer />}
    </main>
  );
};

export default Login;