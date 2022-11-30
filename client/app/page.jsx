import React from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
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
        <div>
          <SellingPoint text="" highlight=" 3% " moreText="cashback on Amazon" />
        </div>
        <div className="two-squares">
          <Square text="Earn" highlight=" 1% " moreText="interest" />
          <Square text="Earn" highlight=" 1% " moreText="interest" />
        </div>
        <Link href="/login">
          <button className="btn" type="button">Get a free account now</button>
        </Link>
      </main>
      <ToastifyMessage />
    </MotionProvider>
  );
};

export default Landingpage;
