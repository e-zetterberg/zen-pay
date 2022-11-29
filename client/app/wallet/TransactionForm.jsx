'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InputAmount from '../../components/InputAmount';
import SendForm from '../../components/SendForm';
import '../../styles/account.css';

const TransactionForm = ({ walletId, max, hasFundingCard }) => {
  const [action, setAction] = useState('deposit');

  return (
    <>
      <div className="balance--button-container">
        {!hasFundingCard
          ? (
            <Link href="/card">
              <button
                type="button"
                className="btn"
              >
                Connect a card
              </button>
            </Link>
          )
          : (
            <>
              <button
                type="button"
                onClick={() => setAction('deposit')}
                className={action === 'deposit' ? 'btn' : 'btn btn--inactive'}
              >
                Deposit
              </button>
              <button
                type="button"
                onClick={() => setAction('withdraw')}
                disabled={max === 0}
                hidden={max === 0}
                className={action === 'withdraw' ? 'btn' : 'btn btn--inactive'}
              >
                Withdraw
              </button>
              <button type="button" className="btn--transfer" onClick={() => setAction('transfer')} disabled={max === 0}>
                <Image
                  src="/../public/tx-button.png"
                  alt="Transaction Button"
                  width={50}
                  height={50}
                  hidden={max === 0}
                />
              </button>
            </>
          )}
      </div>
      {action === 'transfer' ? <SendForm max={max} walletId={walletId} type={action} /> : <InputAmount max={max} walletId={walletId} type={action} />}
    </>
  );
};

export default TransactionForm;
