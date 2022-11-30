import React from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '../lib/session';
import '../styles/landingpage.css';
import SellingPoint from '../components/landingpage/SellingPoint';
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
        <SellingPoint text="Earn" highlight=" 1% " moreText="interest" />
        <SellingPoint text="" highlight=" 3% " moreText="cashback on Amazon" />
        <SellingPoint text="" highlight=" No " moreText="fees" />
        <SellingPoint text="Find" highlight=" peace " moreText="" />
        <SellingPoint text="Become" highlight=" successful " moreText="" />

        <Link href="/login">
          <button className="btn" type="button">Get a free account now</button>
        </Link>
      </main>
      <ToastifyMessage />
    </MotionProvider>
  );
};

export default Landingpage;
