"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import "../styles/InputAmount.css";

const SendForm = ({ type }) => {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(amount);
    const transaction = {
      description: type,
      amount: type === amount,
    };
    const response = await toast.promise(fetch(
      "http://localhost:8080/api/accounts/123/transaction",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      }
    ),
    {
        pending: 'Processing',
        success: `Successful sent ${amount} kr  to ${account} 👌`,
        error: 'Promise rejected 🤯'
    });
    setAmount("");
    router.refresh();
    if (response.status !== 201) {
      return;
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="input-form">
      <input
        onChange={(e) => setAccountNumber(e.target.value)}
        required={true}
        value={accountNumber}
        minLength={16}
        maxLength={16}
        type="text"
        className="input-field"
        placeholder="Destination Account Number"
      />
      <input
        onChange={(e) => setAmount(e.target.value)}
        required={true}
        value={amount}
        min={1}
        type="number"
        className="input-field"
        placeholder="Amount"
      />

      <button className="btn btn--confirm" type="submit">
        Confirm
      </button>
    </form>
  );
};

export default SendForm;
