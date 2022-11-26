import React from 'react';
import Link from 'next/link';
import '../../styles/details.css';
import { IoPersonCircle } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';
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
                <FaEdit />
              </button>
            </Link>
          </div>
          <div className="details--first-section">
            <IoPersonCircle className="details--avatar" />

            <div className="details--name">{userData.zenName}</div>
          </div>
          <div className="details--second-section">
            <p className="details--second-section--items">
              {' '}
              {user?.name}
            </p>
            <p className="details--second-section--items">
              {' '}
              {email}
            </p>
            <p className="details--second-section--items">
              {' '}
              {userData?.phone}
            </p>
            <p className="details--second-section--items">
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
