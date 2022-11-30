import React from 'react';
import Link from 'next/link';
import '../../styles/details.css';
import Image from 'next/image';
import { IoPersonCircle } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';
import { getSession } from '../../lib/session';
import { fetchUserByEmail } from '../../lib/fetching';
import MotionProvider from '../../components/MotionProvider';
import ToastifyMessage from '../../components/ToastifyMessage';
import SignOutButton from '../../components/buttons/SignOutButton';

const Details = async () => {
  const session = await getSession();
  const email = session?.user.email;
  const user = await fetchUserByEmail(email);

  return (
    <MotionProvider>
      <main className="main details--main">
        <div className="details--container">
          <div className="details--card">
            <div className="details--edit-section">
              {user.userId ? (
                <button type="button" className="edit-btn">
                  <Link href="/details/edit">
                    <FaEdit />
                  </Link>
                </button>
              ) : ''}
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
                {user?.createdOn?.substring(0, 24)}
              </p>
            </div>
          </div>
        </div>
        <SignOutButton />
      </main>
      <ToastifyMessage />
    </MotionProvider>
  );
};

export default Details;
