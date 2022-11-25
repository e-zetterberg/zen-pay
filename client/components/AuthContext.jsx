'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
import { UserContextProvider } from './UserContext';

function AuthContext({ children, session, userInfo }) {
  return (
    <SessionProvider session={session}>
      <UserContextProvider userInfo={userInfo}>{children}</UserContextProvider>
    </SessionProvider>
  );
}

export default AuthContext;
