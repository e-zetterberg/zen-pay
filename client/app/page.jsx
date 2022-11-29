import React from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '../lib/session';
import '../styles/Dashboard.css';
import BalanceDisplay from '../components/dashboard/BalanceDisplay';
import { fetchUserByEmail, fetchAccount } from '../lib/fetching';
import MotionProvider from '../components/MotionProvider';
import Register from '../components/Register';
import ToastifyMessage from '../components/ToastifyMessage';
import CryptoDisplay from '../components/dashboard/CryptoDisplay';

const Dashboard = async () => {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }
  const { email } = session.user;
  const user = await fetchUserByEmail(email);

  if (!user.userId) {
    return (
      <Register />
    );
  }

  const account = await fetchAccount(user.accountId);

  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2Cethereum%2Ccardano&order=market_cap_desc&per_page=3&page=1&sparkline=false', {
    headers: {
      accept: 'application/json',
    },
  });
  const cryptoData = await res.json();

  return (
    <MotionProvider>
      <main className="main dashboard--container">
        <div className="dashboard--account-overview">Dashboard</div>
        <Link href="/wallet">
          <BalanceDisplay name="Wallet balance" balance={account?.balance} />
        </Link>
        <div className="dashboard--cryptocontainer">
          {cryptoData.map((coin) => (
            <CryptoDisplay key={coin.id} crypto={`${coin.name} price`} price={coin.current_price} imgSrc={coin.image} />
          ))}
        </div>
      </main>
      <ToastifyMessage />
    </MotionProvider>
  );
};

export default Dashboard;
