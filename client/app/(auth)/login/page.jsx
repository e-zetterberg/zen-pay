import React from 'react';
import { redirect } from 'next/navigation';
import { getSession } from '../../../lib/session';
import LoginButton from './LoginButton';
import '../../../styles/login.css';

const Login = async () => {
  const session = await getSession();
  if (session) {
    redirect('/details');
  }

  return (

    <main className="main login">
      <LoginButton />
    </main>
  );
};

export default Login;
