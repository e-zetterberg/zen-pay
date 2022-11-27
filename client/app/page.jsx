import React from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '../lib/session';
import '../styles/Dashboard.css';
import BalanceDisplay from '../components/dashboard/BalanceDisplay';

const Dashboard = async () => {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }
  const { email } = session.user;
  const fetchAccountId = async () => {
    const response = await fetch(`http://localhost:8080/api/users/${email}`);
    const data = await response.json();
    return data.account;
  };

  const fetchBalance = async (accountId) => {
    const response = await fetch(
      `http://localhost:8080/api/accounts/${accountId}`,
    );
    const data = await response.json();
    return data;
  };

  const account = await fetchAccountId();
  const data = await fetchBalance(account?.accountId);

  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2Cethereum%2Ccardano&order=market_cap_desc&per_page=3&page=1&sparkline=false', {
    headers: {
      accept: 'application/json',
    },
  });
  const cryptoData = await res.json();
  console.log(cryptoData);

  // const myHeaders = new Headers();
  // myHeaders.append('apikey', process.env.API_KEY);

  // const requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow',
  //   headers: myHeaders,
  // };

  // fetch('https://api.apilayer.com/currency_data/change?start_date=2022-11-20&end_date=2022-11-01', requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log('error', error));

  return (
    <main className="main dashboard--container">
      <div className="dashboard--account-overview">Account overview</div>
      <Link href="/wallet">
        <BalanceDisplay name="Wallet balance" balance={data?.balance} />
      </Link>
      {cryptoData.map((coin) => (
        <BalanceDisplay name={`${coin.name} price`} balance={coin.current_price} imgSrc={coin.image} />
      ))}
    </main>
  );
};

export default Dashboard;
