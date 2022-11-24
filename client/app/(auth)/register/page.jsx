"use client";
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import "../../../styles/Register.css"

const Register = () => {
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/accounts", {
      method: "POST",
    });
    console.log(response.status);
    if (response.status !== 201) {
      return;
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
              required>

            </TextField>
            <TextField
              label="Phone"
              size="small"
              type="tel"
              variant="standard"
              required>
            </TextField>
            <TextField
              label="Email"
              size="small"
              type="email"
              InputProps={{readOnly: true}}
              variant="standard">
            </TextField>
         
        </Stack>
        <Stack spacing={4}>
          <Button variant="contained">
              Create Zen Account
          </Button>
        </Stack>
        {/* <button onClick={handleClick}>Create wallet</button> */}
      </div>
    </main>
  );
};

export default Register;
