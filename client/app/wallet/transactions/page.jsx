import '../../../styles/transactionspage.css';
import React, { Suspense } from 'react';
import Link from 'next/link';
import { getSession } from '../../../lib/session';
import { fetchUserByEmail } from '../../../lib/fetching';

const Transactions = async () => {
  const session = await getSession();
  const { email } = session.user;
  const user = await fetchUserByEmail(email);

  if (!user.userId) {
    return (
      <main className="main">
        <h3>You need to register a Zen-Account in order to access your wallet</h3>
        <Link href="/register">
          <button type="button" className="btn">Register</button>
        </Link>
      </main>
    );
  }

  const { transactions } = user.account;

  return (
    <main className="main">
      <div className="transactions--header-container">
        <h3 className="transactions--header">Transactions</h3>
        <hr />
      </div>
      <div className="transaction-container">
        <ul className="transaction-list">
          <Suspense fallback={<p>Loading transactions</p>}>

            {transactions.map((tx) => (
              <li key={tx.transactionId}>
                <span>
                  {tx.amount}
                  €
                </span>
                <span className="tx-description">
                  {tx.description}
                </span>
                <div>
                  {tx.timeStamp}
                </div>
                <hr />
              </li>
            ))}
          </Suspense>
        </ul>
      </div>
    </main>
  );
};

export default Transactions;
