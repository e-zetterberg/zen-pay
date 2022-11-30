import React from 'react';
import '../styles/footer.css';
import { TfiWallet } from 'react-icons/tfi';
import { AiOutlineHome } from 'react-icons/ai';
import { IoPersonCircle } from 'react-icons/io5';
import Link from 'next/link';
import { getSession } from '../lib/session';

const Footer = async () => {
  const session = await getSession();

  return (

    <div className="footer">
      <div className="footer--menu">
        <Link href={session ? '/dashboard' : '/'}>
          <div className="footer--icons-placeholder">
            <AiOutlineHome className="footer--icons--home" />
          </div>
        </Link>
        <Link href="/wallet">
          <div className="footer--icons-placeholder">
            <TfiWallet className="footer--icons--wallet" />
          </div>
        </Link>
        <Link href="/details">
          <div className="footer--icons-placeholder">
            <IoPersonCircle className="footer--icons--profile" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
