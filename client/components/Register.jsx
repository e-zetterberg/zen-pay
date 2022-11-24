'use client';
import React, { useState } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import '../styles/Register.css';
 
function Register() {
  const { data: session } = useSession();
  const router = useRouter();
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email] = useState(session?.user.email)
    
    const handleSubmit = async (e) => {

      e.preventDefault();
      const data = {
        name: name,
        phone: phone,
        email: email, 
        createdOn: new Date().toUTCString()
      }
      console.log(data)
      const response = await fetch("http://localhost:8080/api/accounts", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if(response.status === 200){
        router.push('/');
      }
    };
    return (
        
            <form className="registration--form"  onSubmit={(e)=> handleSubmit(e)}>
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
                pattern="[0-9]{10}"
                onChange={(e)=>setPhone(e.target.value)}
                required />
                 <br/>
                <input type="submit" value="Create Zen Account" />

            
            </form>
        
  )
}

export default Register