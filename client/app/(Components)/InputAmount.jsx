"use client";

import { useState } from 'react';
import React from 'react'
import "../../styles/InputAmount.css"

const InputAmount = () => {

    const [amount, setAmount] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(amount);
        const transaction = {
          description: "deposit",
          amount,
        };
        const response = await fetch('http://localhost:8080/api/accounts/123/transaction', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(transaction),
        })
        setAmount("")
        if (response.status !== 201) {
        return;
      }
        //send in fetch function as prop and call it here
        //... probably :P
    };

  return (
    <form onSubmit={e => handleSubmit(e)} className='input-form'>
      <input 
        onChange={e => setAmount(e.target.value)}
        required={true}
        value={amount}
        className='input-field' 
        type="text" 
        placeholder='Enter Amount'
      />
      <button className='btn btn--confirm' type="submit">Confirm</button>
    </form>
  )
}

export default InputAmount