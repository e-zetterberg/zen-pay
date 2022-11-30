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
        <div className="dashboard--card-ads">
          <SellingPoint text="Earn" highlight=" 1% " moreText="interest" />
          <SellingPoint text="" highlight=" 3% " moreText="cashback on Amazon.com" />
          <SellingPoint text="Get" highlight=" exclusive Rewards " moreText="and save as you spend" />
          <SellingPoint text="" highlight=" Magic " moreText="internet money" />
          <SellingPoint text="...and" highlight=" much more " moreText="" />
        </div>

        <div className="two-squares">
          <Square text="" highlight=" No " moreText="fees" />
          <Square text="Become" highlight=" successful " moreText="" />
        </div>
        <Link href="/login">
          <button className="btn" type="button">Get a free account now</button>
        </Link>
        <div className="image-container">
          <Image className="header--logo" src="/logo-visa.png" alt="Logo" width={80} height={50} />
          <Image className="header--logo" src="/logo-mastercard.png" alt="mastercard" width={68} height={50} />
          <Image className="header--logo" src="/logo-applepay.png" alt="applepay" width={88.5} height={50} />
          <Image className="header--logo" src="/logo-gpay.png" alt="gpay" width={94} height={50} />
          <Image className="header--logo" src="/icon-contactless.png" alt="contactless" width={48.5} height={50} />

        </div>
      </main>
      <ToastifyMessage />
    </MotionProvider>
  );
};

export default Landingpage;
