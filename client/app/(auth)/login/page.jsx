import React from 'react';
import { redirect } from 'next/navigation';
import Image from 'next/image';
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
      <div className="login--container">
        <Image src="/../public/sign-in.png" alt="sign-in" width={210} height={200} />
        <LoginButton />
      </div>
    </main>
  );
};

export default Login;
