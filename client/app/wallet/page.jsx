import React, { Suspense } from 'react';
import Link from 'next/link';
import TransactionForm from './TransactionForm';
import CreditCard from '../../components/CreditCard';
import '../../styles/transactions.css';
import '../../styles/create-account.css';
import { getSession } from '../../lib/session';
import { fetchUserByEmail, fetchAccount } from '../../lib/fetching';
import MotionProvider from '../../components/MotionProvider';
import Register from '../../components/Register';

const Wallet = async () => {
  const session = await getSession();
  const email = session?.user.email;

  const user = await fetchUserByEmail(email);
  if (!user.userId) {
    return (
      <Register />
    );
  }

  const walletId = user.accountId;
  const account = await fetchAccount(user.accountId);

  return (
    <MotionProvider>

      <main className="main homepage--balance">
        <section className="balance--container">
          <Suspense fallback={<CreditCard balance="loading" holder="James Bond" cardNumber="000000000000" />}>

            <CreditCard
              balance={account.balance}
              holder={user.name}
              cardNumber={walletId}
            />
          </Suspense>

          <TransactionForm max={account.balance} walletId={walletId} />
          <div className="transactions--header-container">
            <Link href="/wallet/transactions">
              <h3 className="transactions--header">Transactions</h3>
            </Link>
            <hr />
          </div>
          <div className="transaction-container">
            <ul className="transaction-list">
              {account.transactions.map((tx) => (
                <li key={tx.transactionId}>
                  <div className="transaction">

                    <span>
                      {tx.amount}
                      €
                      {' '}
                    </span>
                    <span className="tx-description">
                      {tx.description}
                      {' '}
                    </span>
                    <div>
                      {tx.timeStamp}
                      {' '}
                    </div>
                  </div>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </MotionProvider>
  );
};
export default Wallet;
