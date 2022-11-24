"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import "../styles/InputAmount.css";

const InputAmount = ({ type, walletId }) => {
  const router = useRouter();
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //UNDER CONSTRUCTION

    console.log(amount);
    const transaction = {
      description: type,
      amount: type === "deposit" ? amount : -amount,
      timeStamp: new Date().toUTCString(),
    };
    const response = await toast.promise( fetch(
      `http://localhost:8080/api/accounts/${walletId}/transaction`,
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
      success: `Successful ${type} ${amount} kr 👌`,
      error: 'Promise rejected 🤯'
    });
    setAmount("");
    router.refresh();
    if (response.status !== 201) {
      return;
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="input-form">
      <div>{walletId}</div>
        <input
          onChange={(e) => setAmount(e.target.value)}
          required={true}
          value={amount}
          type="number"
        min={1}
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
};

export default InputAmount;
