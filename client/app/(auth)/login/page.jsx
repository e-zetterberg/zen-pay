import React from 'react';
import { redirect } from 'next/navigation';
import { getSession } from '../../../lib/session';
import LoginButton from './LoginButton';
import '../../../styles/login.css';

const Login = async () => {
  const session = await getSession();

  const email = session?.user.email;
  const res = await fetch(`http://localhost:8080/api/users/${email}`);

  if (!res.ok && session) {
    redirect('/register');
  }

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
