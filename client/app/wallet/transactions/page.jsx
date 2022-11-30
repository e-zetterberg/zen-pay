import '../../../styles/transactions.css';
import React, { Suspense } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Link from 'next/link';
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
        <div className="all-transactions-card">
          <div className="all-transactions-container">
            <div className="all-transactions--page-header">
              <div className="top-titles">
                <h3 className="all-transactions--header">All transactions</h3>
                <Link href="/wallet">
                  <div className="back-button">Back</div>
                </Link>
              </div>
              <hr />
            </div>
            <div className="transaction-page-container">
              <ul className="transaction-list">
                <Suspense fallback={<p>Loading transactions</p>}>

                  {transactions.slice(0).reverse().map((tx) => (
                    <li key={tx.transactionId}>
                      <div className="transaction-item">
                        <div className="transaction-item--icon-amount">
                          <span>
                            {tx?.amount > 0
                              ? <BsFillArrowLeftCircleFill className="deposit-icon" />
                              : <BsFillArrowRightCircleFill className="withdraw-icon" />}
                          </span>
                            &emsp;
                          <span className="transaction--amount">
                            {tx.amount}
                            €
                          </span>
                        </div>
                        <div className="transaction-timestamp">
                          {tx?.timeStamp}
                        </div>
                      </div>
                      <hr className="transactions-separator-line" />
                    </li>
                  ))}
                </Suspense>
              </ul>
            </div>

          </div>
        </div>
      </main>
    </MotionProvider>
  );
};

export default Transactions;
