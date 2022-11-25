'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/InputAmount.css';
import TextField from '@mui/material/TextField';

function SendForm({ type, walletId, max }) {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(amount);
    const transaction = {
      description: type,
      amount,
      timeStamp: new Date().toUTCString(),
    };
    const response = await toast.promise(
      fetch(
        `http://localhost:8080/api/accounts/transfer/${walletId}/${account}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(transaction),
        },
      ),
      {
        pending: 'Processing',
        success: `Successful sent ${amount} kr  to ${account} 👌`,
        error: 'Promise rejected 🤯',
      },
    );
    setAmount('');
    router.refresh();
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="input-form">
        <TextField
          variant="outlined"
          onChange={(e) => setAccount(e.target.value)}
          required
          value={account}
          minLength={16}
          maxLength={16}
          type="text"
          className="input-field"
          placeholder="Destination Account Number"
        />
        <TextField
          variant="outlined"
          onChange={(e) => setAmount(e.target.value)}
          required
          value={amount}
          max={max}
          min={1}
          type="number"
          className="input-field"
          placeholder="Amount"
        />

        <button className="btn btn--confirm" type="submit">
          Confirm
        </button>
      </form>
      <ToastContainer />
    </>
  );
}

export default SendForm;
