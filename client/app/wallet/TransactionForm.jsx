'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BiTransfer } from 'react-icons/bi';
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
              <button
                type="button"
                className={action === 'transfer'
                  ? 'btn btn--transfer'
                  : 'btn btn--inactive btn--transfer'}
                onClick={() => setAction('transfer')}
                disabled={max === 0}
                hidden={max === 0}
              >
                <BiTransfer fontSize={24} color="inherit" />
              </button>
            </>
          )}
      </div>
      {action === 'transfer' ? <SendForm max={max} walletId={walletId} type={action} /> : <InputAmount max={max} walletId={walletId} type={action} />}
    </>
  );
};

export default TransactionForm;
