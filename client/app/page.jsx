import React, { Suspense } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '../lib/session';
import '../styles/Dashboard.css';

const Dashboard = async () => {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }
  const { email } = session.user;
  const fetchUserId = async () => {
    const response = await fetch(`http://localhost:8080/api/users/${email}`);
    const data = await response.json();
    return data.userId;
  };

  const fetchBalance = async (userId) => {
    const response = await fetch(
      `http://localhost:8080/api/accounts/${userId}`,
      {
        cache: 'no-store',
      },
    );
    const data = await response.json();
    return data;
  };

  const userId = await fetchUserId();
  const data = await fetchBalance(userId);

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
        <div className="dashboard--card">
          <div className="dashboard--current-balance">
            <div className="dashboard--current-balance-text">Current balance</div>
            <div className="dashboard--balance">
              <div className="dashboard--amount">
                <Suspense fallback="Loading...">
                  {data.balance}
                </Suspense>
              </div>
              <div className="dashboard--currency">€</div>
            </div>
          </div>
          <button type="button" className="dashboard--add-funds">+</button>
        </div>
      </Link>
    </main>
  );
};

export default Dashboard;
