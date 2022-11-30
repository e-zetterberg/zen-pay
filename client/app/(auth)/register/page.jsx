'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import '../../../styles/Register.css';
import { TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toDateString from '../../../lib/dateString';
import { baseApiPath } from '../../../lib/apiPath';
import MotionProvider from '../../../components/MotionProvider';

const Register = () => {
  const { data: session } = useSession();
  const [name] = useState(session?.user.name);
  const [phone, setPhone] = useState('');
  const [email] = useState(session?.user.email);
  const [zenName, setZenName] = useState('');
  const [address, setAddress] = useState('');
  const router = useRouter();

  const onPhoneChange = (e) => setPhone(e.target.value);
  const onZenNameChange = (e) => setZenName(e.target.value);
  const onAddressChange = (e) => setAddress(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      phone,
      email,
      zenName,
      address,
      createdOn: toDateString(new Date()),
    };
    const response = await fetch(`${baseApiPath}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status === 201) {
      if (response.ok) {
        toast.success(' Account created Successfully');
        router.push('/card');
        router.refresh();
      }
    }
  };

  return (
    <MotionProvider>
      <main className="main register-form-container">
        <form onSubmit={(e) => handleSubmit(e)} className="register-form--input">
          <Stack className="register-all-inputs" spacing={4}>
            <TextField
              label="Username"
              size="small"
              variant="standard"
              value={zenName}
              onChange={onZenNameChange}
              required
            />
            <TextField
              label="Name"
              size="small"
              variant="standard"
              value={name}
              disabled
              InputProps={{ readOnly: true }}
              required
            />
            <TextField
              label="Phone"
              size="small"
              type="tel"
              value={phone}
              onChange={onPhoneChange}
              variant="standard"
              required
            />
            <TextField
              label="Email"
              size="small"
              type="email"
              value={email}
              disabled
              InputProps={{ readOnly: true }}
              variant="standard"
            />
            <TextField
              label="Address"
              size="small"
              value={address}
              onChange={onAddressChange}
              variant="standard"
            />
          </Stack>
          <button className="global--btn" type="submit">
            Create Account
          </button>
        </form>
      </main>
    </MotionProvider>
  );
};
export default Register;
