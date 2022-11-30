'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/InputAmount.css';
import toDateString from '../lib/dateString';
import { baseApiPath } from '../lib/fetching';

const SendForm = ({ type, walletId, max }) => {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const transaction = {
      description: type,
      amount,
      timeStamp: toDateString(new Date()),
    };
    const message = toast.loading('Processing transaction');
    const response = await (
      fetch(
        `${baseApiPath}/accounts/transfer/${walletId}/${account}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(transaction),
        },
      ));
    setAmount('');
    if (response.ok) {
      toast.update(message, {
        render: `Tranferred ${amount}€ to ${account}`,
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      });
      router.refresh();
      return;
    }
    toast.update(message, {
      render: 'Something went wrong', type: 'error', isLoading: false, autoClose: 3000,
    });
    setAccount('');
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="input-form">
        <input
          onChange={(e) => setAccount(e.target.value)}
          required
          value={account}
          minLength={16}
          maxLength={16}
          type="text"
          inputMode="numeric"
          className="input-field"
          placeholder="Destination Account Number"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          required
          value={amount}
          max={max}
          min={1}
          type="number"
          inputMode="numeric"
          className="input-field no-spin"
          placeholder="Amount"
        />

        <button className="btn btn--confirm" type="submit">
          Confirm
        </button>
      </form>
      <ToastContainer closeOnClick position="top-center" />
    </>
  );
};

export default SendForm;
