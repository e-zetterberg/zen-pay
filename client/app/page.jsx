import React from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getSession } from '../lib/session';
import '../styles/landingpage.css';
import SellingPoint from '../components/landingpage/SellingPoint';
import Square from '../components/landingpage/Square';
import MotionProvider from '../components/MotionProvider';
import ToastifyMessage from '../components/ToastifyMessage';

const Landingpage = async () => {
  const session = await getSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <MotionProvider>
      <main className="main landingpage--main">
        <div className="first-section">
          <div className="dashboard--card-ads">
            <SellingPoint className="sellingpoint-item" text="Earn" highlight=" 1% " moreText="interest" />
            <SellingPoint text="" highlight=" 3% " moreText="cashback on Amazon.com" />
            <SellingPoint text="Get" highlight=" exclusive Rewards " moreText="and save as you spend" />
            <SellingPoint text="" highlight=" Magic " moreText="internet money" />
            <SellingPoint text="...and" highlight=" much more " moreText="" />
          </div>
          <div className="two-squares">
            <Square text="Become a" highlight=" Diamond " moreText="member" />
            <Square text="End-to-end" highlight=" security " moreText="" />
          </div>
        </div>
        <div className="bottom-items">
          <Link href="/login">
            <button className="btn-landing" type="button">Get a free account now</button>
          </Link>
          <div className="image-container">
            <Image className="landing--payment-logos" src="/logo-visa.png" alt="Logo" width={65} height={40} />
            <Image className="landing--payment-logos" src="/logo-mastercard.png" alt="mastercard" width={52} height={38} />
            <Image className="landing--payment-logos" src="/logo-applepay.png" alt="applepay" width={68} height={38} />
            <Image className="landing--payment-logos" src="/logo-gpay.png" alt="gpay" width={73} height={38} />
            <Image className="landing--payment-logos" src="/icon-contactless.png" alt="contactless" width={37} height={38} />
          </div>
        </div>
      </main>
      <ToastifyMessage />
    </MotionProvider>
  );
};

export default Landingpage;
