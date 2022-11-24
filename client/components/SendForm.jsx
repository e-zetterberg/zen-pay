"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import "../styles/InputAmount.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SendForm = ({ type, walletId, max }) => {
  const router = useRouter();
  const [amount, setAmount] = useState();
  const [account, setAccount] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(amount);
    const transaction = {
      description: type,
      amount: amount,
      timeStamp: new Date().toUTCString(),
    };
    const response = await toast.promise(fetch(
      `http://localhost:8080/api/accounts/transfer/${walletId}/${account}`,
      {
        method: "PATCH",
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
    <>

    <form onSubmit={(e) => handleSubmit(e)} className="input-form">
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onChange={(e) => setAccount(e.target.value)}
        required={true}
        value={account}
        minLength={16}
        maxLength={16}
        type="text"
        className="input-field"
    ><TextField id="outlined-basic" label="Destination Account Number" variant="outlined" /></Box>

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
        max={max}
        min={1}
        type="number"
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

export default SendForm;
