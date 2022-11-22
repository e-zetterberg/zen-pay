"use client";

import React from 'react'
import { useSession } from 'next-auth/react';
const Details = () => {
  const {data: session} = useSession();

  return (
    <main className='main account-details'>
        <h2>User information</h2>
        <p>{session ? session.user.name : ''}</p>
        <p>{session ? session.user.email : ''}</p>
        <p>Address:</p>
        <p>Member since: 2022-11-21</p>

    </main>
  )
}

export default Details