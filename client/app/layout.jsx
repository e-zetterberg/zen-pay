/* eslint-disable camelcase */
import { Poppins } from '@next/font/google';
import React from 'react';
import { getSession } from '../lib/session';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthContext from '../components/AuthContext';
import '../styles/globals.css';

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  weight: '500',
});

export default async function RootLayout({ children }) {
  const session = await getSession();
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body>

        <Header />
        <AuthContext session={session}>
          {children}
        </AuthContext>
        <Footer />

      </body>
    </html>
  );
}
