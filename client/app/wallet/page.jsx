import React, { Suspense } from 'react';
import Link from 'next/link';
import { getSession } from '../../lib/session';
import TransactionForm from './TransactionForm';
import CreditCard from '../../components/CreditCard';
import '../../styles/transactions.css';
import { fetchUserByEmail } from '../../lib/fetching';

const Wallet = async () => {
  const session = await getSession();
  const email = session?.user.email;

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

  const { account } = user;
  const walletId = account.accountId;

  return (
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
