"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react'
import "../../styles/InputAmount.css"

const InputAmount = ({type}) => {

    const router = useRouter();
    const [amount, setAmount] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(amount);
        const transaction = {
          description: type,
          amount: (type === 'deposit') ? amount : -amount,
        };
        const response = await fetch('http://localhost:8080/api/accounts/123/transaction', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(transaction),
        })
        setAmount("")
        router.refresh();
        if (response.status !== 201) {
        return;
      }
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