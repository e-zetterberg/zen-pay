import React from 'react';
import Image from 'next/image';
import '../styles/Header.css';
import Menu from './Menu';
import DashboardLink from './dashboard/DashboardLink';
import { getSession } from '../lib/session';

const Header = () => {
  const session = getSession();
  return (

    <header className="header">
      <nav className="header--navbar">
        <span className="align--span" />
        <DashboardLink href={session ? '/dashboard' : '/'}>
          <Image priority className="header--logo" src="/zen-red-logo.png" alt="Logo" width={240} height={66} />
        </DashboardLink>
        <Menu className="header--menu" />
      </nav>
    </header>
  );
};

export default Header;
