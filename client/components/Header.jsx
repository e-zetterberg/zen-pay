import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "../styles/Header.css";
import Menu from "./Menu";

function Header() {
  return (
    <header className='header'>
      <nav className='header--navbar'>
        <span className="align--span"></span>
        <Link href="/">
          <Image className="header--logo" src="/logo-transparent.png" alt="Logo" width={211} height={73}></Image>
        </Link>
        <Menu className="header--menu"/>
      </nav>
    </header>
  )
}

export default Header