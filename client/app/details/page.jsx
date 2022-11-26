import React from 'react';
import Link from 'next/link';
import '../../styles/details.css';
import { IoPersonCircle } from 'react-icons/io5';
import { AiOutlineEdit } from 'react-icons/ai';
import { getCurrentUser } from '../../lib/session';

const Details = async () => {
  const user = await getCurrentUser();
  const email = user?.email;
  const res = await fetch(`http://localhost:8080/api/users/${email}`);
  const userData = await res.json();

  return (
    <main className="main">
      <div className="details--container">

        <div className="details--card">
          <div className="details--edit-section">
            <Link href="/editUserDetails">

              <button type="button" className="edit-btn">
                <AiOutlineEdit />
              </button>
            </Link>
          </div>
          <div className="details--first-section">
            <IoPersonCircle className="details--avatar" />

            <div className="details--name">{userData.zenName}</div>
          </div>
          <div className="details--second-section">
            <p className="details--second-section--items">
              Name:
              {' '}
              {user?.name}
            </p>
            <p className="details--second-section--items">
              Email:
              {' '}
              {email}
            </p>
            <p className="details--second-section--items">
              Phone:
              {userData?.phone}
            </p>
            <p className="details--second-section--items">
              Address:
              {' '}
              {userData?.address}
            </p>
            <p className="details--second-section--items">
              Member since:
              {' '}
              {userData?.createdOn}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Details;
