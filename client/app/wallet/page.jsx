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
import ToastifyMessage from '../../components/ToastifyMessage';

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
  const lastTransaction = account.transactions.at(-1);
  const nextToLastTransaction = account.transactions.at(-2);

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

          <TransactionForm
            max={account.balance}
            walletId={walletId}
            hasFundingCard={account.cards.length > 0}
          />
          <div className="transaction-container">
            <div className="transactions--header-container">
              <h3 className="transactions--header">Latest transactions</h3>
              <Link href="/wallet/transactions">
                <span className="transactions-link">See all</span>
              </Link>
            </div>

            <div className="line">

              <hr />
            </div>

            <ul className="transaction-list">

              <li>
                <div className="transaction">

                  <span>
                    {`${lastTransaction?.amount} €`}
                  </span>

                  <div>
                    {lastTransaction?.timeStamp.substring(10, 16)}
                  </div>
                </div>
              </li>
              <li>
                <div className="transaction">

                  <span>
                    {`${nextToLastTransaction?.amount} €`}

                  </span>

                  <div>
                    {nextToLastTransaction?.timeStamp.substring(10, 16)}
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </section>
      </main>
      <ToastifyMessage />
    </MotionProvider>
  );
};
export default Wallet;
