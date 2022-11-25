'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import InputAmount from '../../components/InputAmount';
import SendForm from '../../components/SendForm';
import '../../styles/account.css';

function TransactionForm({ walletId, max }) {
  const [action, setAction] = useState('deposit');

  return (
    <>
      <div className="balance--button-container">
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
        <div>
          <button type="button" className="btn--transfer" onClick={() => setAction('transfer')}>
            <Image
              src="/../public/tx-button.png"
              alt="Transaction Button"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
      {action === 'transfer' ? <SendForm max={max} walletId={walletId} /> : <InputAmount max={max} walletId={walletId} type={action} />}
    </>
  );
}

export default TransactionForm;
