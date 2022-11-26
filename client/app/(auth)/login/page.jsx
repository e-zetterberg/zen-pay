'use client';

import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import '../../../styles/login.css';

const Login = () => {
  const { data: session } = useSession();
  if (session) {
    redirect('/details');
  }

  return (

    <main className="main login">
      <button type="button" onClick={signIn}>
        Sign In
      </button>
    </main>
  );
};

export default Login;
