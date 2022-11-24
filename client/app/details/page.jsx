"use client";
import React from "react";
import { useSession } from "next-auth/react";
import "../../styles/account-details.css"

const Details = () => {
  const { data: session } = useSession();

  return (
    <main className="details">
      <h2>{session ? session.user.name : ""}</h2>
      <p>{session ? session.user.email : ""}</p>
      <p>Address:</p>
      <p>Member since: 2022-11-21</p>
    </main>
  );
};

export default Details;
