import React from 'react';
import Image from 'next/image';
import '../styles/Header.css';
import Link from 'next/link';
import Menu from './Menu';
import { getSession } from '../lib/session';

const Header = () => {
  const session = getSession();
  return (

    <header className="header">
      <nav className="header--navbar">
        <span className="align--span" />
        <Link href={session ? '/dashboard' : '/'}>
          <Image priority className="header--logo" src="/zen-red-logo.png" alt="Logo" width={240} height={66} />
        </Link>
        <Menu className="header--menu" />
      </nav>
    </header>
  );
};

export default Header;
