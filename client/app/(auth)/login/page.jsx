'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Register from '../../../components/Register';
import { useUserContext } from '../../../components/UserContext';
import Details from '../../details/page';
import '../../../styles/login.css';
import Footer from '../../../components/Footer';

function Login() {
  const router = useRouter();
  const { data: session } = useSession();
  const { userData, clearUserData } = useUserContext();

  const handleClick = (e) => {
    e.preventDefault();
    clearUserData();
    signOut();
  };

  const showFooter = router.pathname !== '/login';

  return (
    <main className="main login">

      {session
        ? userData.status !== 404 ? <Details /> : <Register />
        : 'Hello user, please sign in'}

      {!session ? (
        <div className="google-btn" onClick={() => signIn('google')}>
          <div className="google-icon-wrapper">
            <img className="google-icon" src="https://developers.google.com/static/identity/images/btn_google_signin_dark_normal_web.png" />
          </div>
          <p className="btn-text"><b /></p>
        </div>

      ) : ''}
      {showFooter && <Footer />}
    </main>
  );
}

export default Login;
