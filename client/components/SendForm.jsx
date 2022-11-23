"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
    const response = await fetch(
      "http://localhost:8080/api/accounts/123/transaction",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      }
    );
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
        //TODO add min length and max-length
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
