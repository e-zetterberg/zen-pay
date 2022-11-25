'use client';

import React from 'react';
import '../../styles/details.css';
import { IoPersonCircle } from 'react-icons/io5';
import { AiOutlineEdit } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { useUserContext } from '../../components/UserContext';

function Details() {
  const { userData } = useUserContext();
  const router = useRouter();
  const editDetails = (e) => {
    e.preventDefault();
    router.push('/editUserDetails');
  };

  return (
    <main className="main">
      <div className="details--container">

        <div className="details--card">
          <div className="details--edit-section">
            <button type="button" className="edit-btn" onClick={(e) => editDetails(e)}>
              {' '}
              <AiOutlineEdit />
            </button>
          </div>
          <div className="details--first-section">
            <IoPersonCircle className="details--avatar" />

            <div className="details--name">{userData.zenName}</div>
          </div>
          <div className="details--second-section">
            <p className="details--second-section--items">
              Name:
              {' '}
              {userData.name}
            </p>
            <p className="details--second-section--items">{userData.email}</p>
            <p className="details--second-section--items">
              Phone:
              {' '}
              {userData.phone}
            </p>
            <p className="details--second-section--items">
              Address:
              {' '}
              {userData.address}
            </p>
            <p className="details--second-section--items">
              Member since:
              {' '}
              {userData.createdOn}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Details;
