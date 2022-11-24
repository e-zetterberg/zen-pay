"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { UserContextProvider } from "./UserContext";

const AuthContext = ({ children, session, userData }) => {
  return (
    <SessionProvider session={session}>
      <UserContextProvider userData={userData}>{children}</UserContextProvider>
    </SessionProvider>
  );
};

export default AuthContext;
