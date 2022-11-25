'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/Register.css';
import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';

const Register = () => {
  const router = useRouter();

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [zenName, setZenName] = useState();
  const [address, setAddress] = useState();

  const onNameChange = (e) => setName(e.target.value);
  const onPhoneChange = (e) => setPhone(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onZenNameChange = (e) => setZenName(e.target.value);
  const onAddressChange = (e) => setAddress(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userId: '129109210201',
      name,
      phone,
      email,
      zenName,
      address,
      createdOn: new Date().toUTCString(),
    };
    console.log(data);
    const response = await fetch('http://localhost:8080/api/users', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      router.refresh();
      router.push('/details');
    }
  };
  return (
    <main className="main">
      <div className="form--input">
        <Stack spacing={4}>
          <TextField
            label="Zen Name"
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
            onChange={onNameChange}
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
            onChange={onEmailChange}
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
        <div className="zen-button">
          <Button variant="contained" onClick={(e) => handleSubmit(e)}>
            Save
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Register;
