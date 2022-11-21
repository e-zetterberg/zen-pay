"use client";

import React from 'react'
import "../../styles/InputAmount.css"

const InputAmount = () => {
  return (
    <form className='input-form'>
      <input className='input-field' type="text" />
      <button className='btn btn--confirm' type="submit">Confirm</button>
    </form>
  )
}

export default InputAmount