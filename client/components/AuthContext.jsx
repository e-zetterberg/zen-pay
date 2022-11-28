'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

const AuthContext = ({ children, session }) => (

  <SessionProvider session={session}>

    {children}

  </SessionProvider>
);

export default AuthContext;
