"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import "../styles/InputAmount.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputAmount = ({ type, walletId, max }) => {
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
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onChange={(e) => setAmount(e.target.value)}
          required={true}
          value={amount}
          type="number"
          max={type==='withdraw' ? max : 10000}
          min={1}
          className="input-field"
    ><TextField id="outlined-basic" label="Amount" variant="outlined" /></Box>

        <button className="btn btn--confirm" type="submit">
          Confirm
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default InputAmount;
