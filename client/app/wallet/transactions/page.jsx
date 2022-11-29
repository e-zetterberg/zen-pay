import '../../../styles/transactions.css';
import React, { Suspense } from 'react';
import { getSession } from '../../../lib/session';
import { fetchUserByEmail, fetchAccount } from '../../../lib/fetching';
import Register from '../../../components/Register';
import MotionProvider from '../../../components/MotionProvider';

const Transactions = async () => {
  const session = await getSession();
  const { email } = session.user;
  const user = await fetchUserByEmail(email);

  if (!user.userId) {
    return (
      <Register />
    );
  }
  const account = await fetchAccount(user.accountId);
  const { transactions } = account;

  return (
    <MotionProvider>
      <main className="main">
        <div className="transactions--page-header">
          <h3 className="transactions--header">Transactions</h3>
          <hr />
        </div>
        <div className="transaction-page-container">
          <ul className="transaction-list">
            <Suspense fallback={<p>Loading transactions</p>}>

              {transactions.map((tx) => (
                <li key={tx.transactionId}>
                  <div className="transaction">
                    <span className="tx-description">
                      {tx.description}
                    </span>
                    <span>
                      {tx.timeStamp}
                    </span>
                    <span className="transaction--amount">
                      {tx.amount}
                      €
                    </span>
                  </div>
                  <hr />
                </li>
              ))}
            </Suspense>
          </ul>
        </div>
      </main>
    </MotionProvider>
  );
};

export default Transactions;
