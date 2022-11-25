"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import "../styles/InputAmount.css";
import TextField from '@mui/material/TextField';
import { toDateString } from "../lib/dateString";

const InputAmount = ({ type, walletId, max }) => {
  const router = useRouter();
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transaction = {
      description: type,
      amount: type === "deposit" ? amount : -amount,
      timeStamp: toDateString(new Date()),
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
        <TextField
                variant="outlined"
          onChange={(e) => setAmount(e.target.value)}
          required={true}
          value={amount}
          type="number"
          max={type==='withdraw' ? max : 10000}
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
