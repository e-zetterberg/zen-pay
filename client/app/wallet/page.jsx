import React, { Suspense } from 'react';
import Link from 'next/link';
import { getCurrentUser } from '../../lib/session';
import TransactionForm from './TransactionForm';
import CreditCard from '../../components/CreditCard';
import '../../styles/transactions.css';

const Wallet = async () => {
  const user = await getCurrentUser();
  const email = user?.email;

  const fetchAccount = async () => {
    const response = await fetch(`http://localhost:8080/api/users/${email}`);
    const data = await response.json();
    return data.account;
  };

  const data = await fetchAccount();
  if (!data) {
    return (
      <main className="main">
        <h3>You need to register a Zen-Account in order to access your wallet</h3>
        <Link href="/register">
          <button type="button" className="btn">Register</button>
        </Link>
      </main>
    );
  }

  const walletId = data.accountId;

  return (
    <main className="main homepage--balance">
      <section className="balance--container">
        <Suspense fallback={<CreditCard balance="loading" holder="James Bond" cardNumber="000000000000" />}>

          <CreditCard
            balance={data.balance}
            holder={user.name}
            cardNumber={walletId}
          />
        </Suspense>

        <TransactionForm max={data.balance} walletId={walletId} />
        <div className="transactions--header-container">
          <Link href="/wallet/transactions">
            <h3 className="transactions--header">Transactions</h3>
          </Link>
          <hr />
        </div>
        <div className="transaction-container">
          <ul className="transaction-list">
            {data.transactions.map((tx) => (
              <li key={tx.transactionId}>
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
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};
export default Wallet;
