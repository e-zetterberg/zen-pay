import React from 'react';
import { redirect } from 'next/navigation';
import { unstable_getServerSession } from 'next-auth';
import '../styles/Dashboard.css';
import Link from 'next/link';

const Dashboard = async () => {
  const session = await unstable_getServerSession();
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

  return (
    <main className="main dashboard--container">
      <div className="dashboard--account-overview">Account overview</div>
      <Link href="/wallet">
        <div className="dashboard--card">
          <div className="dashboard--current-balance">
            <div className="dashboard--current-balance-text">Current balance</div>
            <div className="dashboard--balance">
              <div className="dashboard--amount">{data.balance}</div>
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
