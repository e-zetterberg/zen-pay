'use client';

import React from 'react';
import { signOut } from 'next-auth/react';

const SignOutButton = () => (
  <button className="sign-out-btn" type="button" onClick={() => signOut()}>Sign Out</button>
);

export default SignOutButton;
