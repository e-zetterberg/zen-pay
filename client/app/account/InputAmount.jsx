"use client";

import { useState } from 'react';
import React from 'react'
import "../../styles/InputAmount.css"

const InputAmount = () => {

    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(amount);

        //send in fetch function as prop and call it here
        //... probably :P
        setAmount("")
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