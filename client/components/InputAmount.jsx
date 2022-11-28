'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/InputAmount.css';
import toDateString from '../lib/dateString';
import { baseApiPath } from '../lib/fetching';

const InputAmount = ({ type, walletId, max }) => {
  const router = useRouter();
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transaction = {
      description: type,
      amount: type === 'deposit' ? amount : -amount,
      timeStamp: toDateString(new Date()),
    };
    const message = toast.loading('Processing transaction');
    const response = await fetch(
      `${baseApiPath}/accounts/${walletId}/transaction`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
      },
    );
    setAmount('');
    if (response.ok) {
      toast.update(message, {
        render: `Succesfully ${type === 'deposit' ? 'deposited ' : 'withdrew '} ${amount}€`, type: 'success', isLoading: false, autoClose: 3000,
      });
      router.refresh();
      return;
    }
    toast.update(message, {
      render: 'Something went wrong', type: 'error', isLoading: false, autoClose: 3000,
    });
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="input-form">
        <input
          onChange={(e) => setAmount(e.target.value)}
          required
          value={amount}
          type="number"
          max={type === 'withdraw' ? max : 10000}
          min={1}
          className="input-field no-spin"
          placeholder="Amount"
        />
        <button className="btn btn--confirm" type="submit">
          Confirm
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default InputAmount;
