import '../../../styles/transactionspage.css';
import React, { Suspense } from 'react';
import { getSession } from '../../../lib/session';

const Transactions = async () => {
  const session = await getSession();
  const { email } = session.user;
  const fetchAccount = async () => {
    const response = await fetch(`http://localhost:8080/api/users/${email}`);
    const data = await response.json();
    return data.account;
  };

  const data = await fetchAccount();

  return (
    <main className="main">
      <div className="transactions--header-container">
        <h3 className="transactions--header">Transactions</h3>
        <hr />
      </div>
      <div className="transaction-container">
        <ul className="transaction-list">
          <Suspense fallback={<p>Loading transactions</p>}>

            {data.transactions.map((tx) => (
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
