'use client';

import React from 'react';
import Link from 'next/link';
import '../../styles/details.css';
import Image from 'next/image';
import { IoPersonCircle } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';
import { signOut } from 'next-auth/react';
import { getSession } from '../../lib/session';
import { fetchUserByEmail } from '../../lib/fetching';
import MotionProvider from '../../components/MotionProvider';
import ToastifyMessage from '../../components/ToastifyMessage';

const Details = async () => {
  const session = await getSession();
  const email = session?.user.email;
  const user = await fetchUserByEmail(email);

  return (
    <MotionProvider>
      <main className="main">
        <div className="details--container">

          <div className="details--card">
            <div className="details--edit-section">
              <button type="button" className="edit-btn">
                <Link href="/details/edit">
                  <FaEdit />
                </Link>
              </button>
            </div>
            <div className="details--first-section">
              {session
                ? <Image src={session.user.image} height={75} width={75} />
                : <IoPersonCircle className="details--avatar" />}

              <div className="details--name">{user?.zenName}</div>
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
                {user?.phone}
              </p>
              <p className="details--second-section--items">
                {' '}
                {user?.address}
              </p>
              <p className="details--second-section--items">
                {user?.createdOn}
              </p>
            </div>
          </div>
          <Link href="/" onClick={() => signOut()}>
            <button className="sign-out-btn" type="button">Sign out</button>
          </Link>
        </div>
      </main>
      <ToastifyMessage />
    </MotionProvider>
  );
};

export default Details;
