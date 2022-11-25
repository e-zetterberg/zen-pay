'use client';

import React from 'react';
import '../../styles/details.css';
import { IoPersonCircle } from 'react-icons/io5';
import { AiOutlineEdit } from 'react-icons/ai';
import { redirect } from 'next/navigation';

const Details = () => {
  const editDetails = (e) => {
    e.preventDefault();
    redirect('/editUserDetails');
  };

  return (
    <main className="main">
      <div className="details--container">

        <div className="details--card">
          <div className="details--edit-section">
            <button type="button" className="edit-btn" onClick={(e) => editDetails(e)}>
              <AiOutlineEdit />
            </button>
          </div>
          <div className="details--first-section">
            <IoPersonCircle className="details--avatar" />

            <div className="details--name">Zen</div>
          </div>
          <div className="details--second-section">
            <p className="details--second-section--items">
              Name:
              {' '}
              Erik
            </p>
            <p className="details--second-section--items">email</p>
            <p className="details--second-section--items">
              Phone:
              {' '}
              phone
            </p>
            <p className="details--second-section--items">
              Address:
              {' '}
            </p>
            <p className="details--second-section--items">
              Member since:
              {' '}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
