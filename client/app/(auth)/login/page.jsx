import React from 'react';
import { redirect } from 'next/navigation';
import { getSession } from '../../../lib/session';
import LoginButton from './LoginButton';
import { fetchUserByEmail } from '../../../lib/fetching';
import '../../../styles/login.css';

const Login = async () => {
  const session = await getSession();

  const email = session?.user.email;
  const user = await fetchUserByEmail(email);

  if (!user.userId && session) {
    redirect('/register');
  }

  if (session) {
    redirect('/');
  }

  return (

    <main className="main login">
      <LoginButton />
    </main>
  );
};

export default Login;
