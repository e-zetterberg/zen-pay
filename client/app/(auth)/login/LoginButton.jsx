'use client';

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { signIn } from 'next-auth/react';

const LoginButton = () => (
  <div className="sign-in--container">
    <div type="button" className="google-btn" onClick={() => signIn('google')}>
      <div className="google-icon-wrapper">
        <img
          className="google-icon"
          src="/google-signin-dark.png"
          alt="Google Login Button"
        />
      </div>
      <p className="btn-text">
        <b />
      </p>
    </div>
  </div>
);

export default LoginButton;
