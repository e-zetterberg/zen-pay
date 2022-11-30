import React, { Suspense } from 'react';
import Link from 'next/link';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
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
  const { transactions } = account;

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

              {transactions.slice(0).reverse().slice(0, 2).map((tx) => (
                <li>
                  <div className="transaction">
                    <div className="transaction-icon-amount">
                      {tx?.amount > 0
                        ? <BsFillArrowLeftCircleFill className="deposit-icon" />
                        : <BsFillArrowRightCircleFill className="withdraw-icon" />}
                      &emsp;
                      <span>
                        {`${tx?.amount} €`}
                      </span>

                    </div>

                    <div>
                      {tx?.timeStamp.substring(12)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <ToastifyMessage />
    </MotionProvider>
  );
};
export default Wallet;
