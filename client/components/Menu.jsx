'use client';

import React, { useState } from 'react';
import '../styles/Menu.css';
import { IoPersonCircle } from 'react-icons/io5';
import { GoSettings } from 'react-icons/go';
import { MdOutlineEmail } from 'react-icons/md';
import { FiInfo } from 'react-icons/fi';
import Link from 'next/link';
import { TfiWallet } from 'react-icons/tfi';
import { signOut } from 'next-auth/react';

const Menu = () => {
  const [toggle, setToggle] = useState(false);
  const collapseMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div id="menuToggle">
      <input type="checkbox" onChange={collapseMenu} checked={toggle} />
      <span />
      <span />
      <span />
      <ul id="menu">
        <Link href="/wallet" onClick={collapseMenu}>
          <li className="menu--items">
            <TfiWallet className="menu--icons" />
            {' '}
            Wallet
          </li>
        </Link>
        <Link href="/details" onClick={collapseMenu}>
          <li className="menu--items">
            <IoPersonCircle className="menu--icons" />
            {' '}
            Account
          </li>
        </Link>
        <Link href="/settings" onClick={collapseMenu}>
          <li className="menu--items">
            <GoSettings className="menu--icons" />
            {' '}
            Settings
          </li>
        </Link>
        <Link href="/contact" onClick={collapseMenu}>
          <li className="menu--items">
            <MdOutlineEmail className="menu--icons" />
            {' '}
            Contact
          </li>
        </Link>
        <Link href="/about" onClick={collapseMenu}>
          <li className="menu--items">
            <FiInfo className="menu--icons" />
            {' '}
            About
          </li>
        </Link>
        <Link href="/login" onClick={signOut}><li>Sign out</li></Link>
      </ul>
    </div>
  );
};

export default Menu;
