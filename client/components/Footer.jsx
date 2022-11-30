import React from 'react';
import '../styles/footer.css';
import Link from 'next/link';
import { getSession } from '../lib/session';
import FooterHomeIcon from './footer-links/FooterHomeIcon';
import FooterWalletIcon from './footer-links/FooterWalletIcon';
import FooterAccountIcon from './footer-links/FooterAccountIcon';

const Footer = async () => {
  const session = await getSession();

  return (

    <div className="footer">
      <div className="footer--menu">
        <Link href={session ? '/dashboard' : '/'}>
          <FooterHomeIcon />
        </Link>
        <Link href="/wallet">
          <FooterWalletIcon />
        </Link>
        <Link href="/details">
          <FooterAccountIcon />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
