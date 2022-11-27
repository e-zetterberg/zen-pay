'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../styles/Register.css';
import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';

const UserForm = ({ user }) => {
  const router = useRouter();
  const [name] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email] = useState(user.email);
  const [zenName, setZenName] = useState(user.zenName);
  const [address, setAddress] = useState(user.address);

  const onPhoneChange = (e) => setPhone(e.target.value);
  const onZenNameChange = (e) => setZenName(e.target.value);
  const onAddressChange = (e) => setAddress(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userId: user.userId,
      name,
      phone,
      email,
      zenName,
      address,
    };
    const response = await fetch('http://localhost:8080/api/users', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      router.refresh();
      router.push('/details');
    }
  };

  return (
    <main className="main edit-user-page">
      <form className="form--input" onSubmit={(e) => handleSubmit(e)}>
        <Stack spacing={4} className="edit-user--all-fields">
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
        <Button type="submit" className="zen-button save-button" variant="contained">
          Save
        </Button>

      </form>
    </main>
  );
};

export default UserForm;
