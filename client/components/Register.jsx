"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "../styles/Register.css";
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";

const Register = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email] = useState(session?.user.email);

  const onNameChange = (e) => setName(e.target.value);
  const onPhoneChange = (e) => setPhone(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      phone: phone,
      email: email,
      createdOn: new Date().toUTCString(),
    };
    console.log(data);
    const response = await fetch("http://localhost:8080/api/accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
      if(response.status === 200){;
      router.push("/");
      }
  };
  return (
    <main className="main">
      <div className="form--input">
        <Stack spacing={4}>
          <TextField
            label="Name"
            size="small"
            variant="standard"
            value={name}
            onChange={onNameChange}
            required
          ></TextField>
          <TextField
            label="Phone"
            size="small"
            type="tel"
            value={phone}
            onChange={onPhoneChange}
            variant="standard"
            required
          ></TextField>
          <TextField
            label="Email"
            size="small"
            type="email"
            value={email}
            onChange={onEmailChange}
            InputProps={{ readOnly: true }}
            variant="standard"
          ></TextField>
        </Stack>
        <div className="zen-button">
          <Button variant="contained" onClick={(e) => handleSubmit(e)}>
            Create Zen Account
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Register;
