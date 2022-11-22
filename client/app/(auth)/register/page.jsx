"use client";
import React from 'react'

const Register = () => {
    const handleClick = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/api/accounts', {
          method: "POST",
        });
        console.log(response.status);
        if (response.status !== 201) {
        return;
      }
    };

  return (
    <main className='main'>
    <div>
        <button onClick={handleClick}>Create wallet</button>
    </div>
    </main>
  )
}

export default Register