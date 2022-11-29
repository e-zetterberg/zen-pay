'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../styles/Register.css';
import { TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseApiPath } from '../lib/fetching';

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
    const response = await fetch(`${baseApiPath}/users`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      toast.success(' Information Updated Successfully', {
        position: toast.POSITION.TOP_CENTER,
      });
      router.push('/details');
      router.refresh();
    }
  };

  return (
    <main className="main edit-user-container">
      <form onSubmit={(e) => handleSubmit(e)} className="edit-form-input">
        <Stack spacing={4} className="edit-all-inputs">
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
        <button type="submit" className="edit-save-button">
          Save
        </button>

      </form>
    </main>
  );
};

export default UserForm;
