'use client';
import React, { useState } from 'react'
import { useSession } from "next-auth/react"
 
function Register() {
  const { data: session } = useSession();

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState(session ? session.user.email : "")
    const handleSubmit = () => {
      console.log(name, phone, email)
    }
    return (
        <div className="form--container">
            <form className=""  onSubmit={()=> handleSubmit()}>
                <input 
                type='text' 
                placeholder='Name'
                value={name}
                size="30"
                onChange={(e)=>setName(e.target.value)}/>
                 <br/>
                <input
                type="email"
                placeholder="Email"
                value={email}
                disabled
                size="30" required
                />
                 <br/>
                <input 
                type="tel"
                name="phone"
                placeholder="phone"
                size="30"
                value={phone}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={(e)=>setPhone(e.target.value)}
                required />
                 <br/>
                <input type="submit" value="Create Zen Account" />

            
            </form>
        </div>
  )
}

export default Register