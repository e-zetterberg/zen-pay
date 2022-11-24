"use client";
import React from "react";
import { useSession } from "next-auth/react";
import "../../styles/account-details.css"
import { IoPersonCircle } from "react-icons/io5";

const Details = () => {
  const { data: session } = useSession();

  // const fetchUserData = async ( email ) => {
  //   const response = await fetch(
  //     `http://localhost:8080/api/accounts/${emailId}`,
  //     {
  //       cache: "no-store",
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   return data;
  // };
  // const userId = await fetchUserId();
  // const data = await fetchBalance(userId);
  // const walletPath = `/wallet/${data.accountId}`;

  return (
    <main className="details--container">
      <div className="details--first-section">
        <IoPersonCircle className="details--avatar" />
        <h2>{session ? session.user.name : ""}</h2>
      </div>
      <div className="details--second-section">
        <p className="details--second-section--items">{session ? session.user.email : ""}</p>
        <p className="details--second-section--items">Address:</p>
        <p className="details--second-section--items">Member since: 2022-11-21</p>
      </div>
    </main>
  );
};

export default Details;
