'use client';

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { signIn } from 'next-auth/react';

const LoginButton = () => (
  <div type="button" className="google-btn" onClick={() => signIn('google')}>
    <div className="google-icon-wrapper">
      <img
        className="google-icon"
        src="https://developers.google.com/static/identity/images/btn_google_signin_dark_normal_web.png"
        alt="Google Login Button"
      />
    </div>
    <p className="btn-text">
      <b />
    </p>
  </div>
);

export default LoginButton;
