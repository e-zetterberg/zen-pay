'use client';

import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import '../../../styles/login.css';

function Login() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    router.push('http://localhost:3000/');
  }

  return (

    <main className="main login">
      <button type="button" onClick={() => signIn('google')}>
        Sign In
      </button>
    </main>
  );
}

export default Login;
