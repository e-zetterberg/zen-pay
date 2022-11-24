"use client";
import React from "react";
import "../../styles/details.css"
import { IoPersonCircle } from "react-icons/io5";
import { useUserContext } from "../../components/UserContext";

const Details = () => {

  const {userData} = useUserContext();
  console.log(userData);

  return (
    <main className="details--container">
      <div className="details--card">
        <div className="details--first-section">
          <IoPersonCircle className="details--avatar" />
          <div className="details--name">{userData.name}</div>
        </div>
        <div className="details--second-section">
          <p className="details--second-section--items">{userData.email}</p>
          <p className="details--second-section--items">Phone: {userData.phone}</p>
          <p className="details--second-section--items">Member since: {userData.createdOn}</p>
        </div>
      </div>
    </main>
  );
};


export default Details;