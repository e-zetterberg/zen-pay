'use client';

import React, { useState, useRef, useEffect } from 'react';
import '../styles/Menu.css';
import { IoPersonCircle } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { RiQuestionnaireFill, RiDashboard3Line } from 'react-icons/ri';
import { FiInfo } from 'react-icons/fi';
import Link from 'next/link';
import { TfiWallet } from 'react-icons/tfi';
import { signOut, useSession } from 'next-auth/react';

const Menu = () => {
  const session = useSession();
  const [toggle, setToggle] = useState(false);
  const collapseMenu = () => {
    setToggle(!toggle);
  };

  const refOne = useRef(null);
  const handleClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside, true);
  }, []);

  return (
    <div ref={refOne} id="menuToggle">
      <input type="checkbox" onChange={collapseMenu} checked={toggle} />
      <span />
      <span />
      <span />
      <ul id="menu">
        {session.data ? (
          <Link href="/dashboard" onClick={collapseMenu}>
            <li className="menu--items">
              <RiDashboard3Line className="menu--icons dashboard-icon" />
              {' '}
              Dashboard
            </li>
          </Link>
        ) : ''}
        {session.data ? (
          <Link href="/wallet" onClick={collapseMenu}>
            <li className="menu--items">
              <TfiWallet className="menu--icons" />
              {' '}
              Wallet
            </li>
          </Link>
        ) : ''}
        {session.data ? (
          <Link href="/details" onClick={collapseMenu}>
            <li className="menu--items">
              <IoPersonCircle className="menu--icons" />
              {' '}
              Account
            </li>
          </Link>
        ) : ''}
        <Link href="/faq" onClick={collapseMenu}>
          <li className="menu--items">
            <RiQuestionnaireFill className="menu--icons" />
            {' '}
            FAQ
          </li>
        </Link>
        <Link href="/contact" onClick={collapseMenu}>
          <li className="menu--items">

            <HiOutlineMail className="menu--icons" />
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
        {
          session.data
            ? <Link href="/" onClick={() => signOut()}><li>Sign out</li></Link>
            : <Link href="/login"><li>Sign in</li></Link>
          }
      </ul>
    </div>
  );
};

export default Menu;
