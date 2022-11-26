import React from 'react';
import UserForm from '../../../components/UserForm';
import { getSession } from '../../../lib/session';

const Edit = async () => {
  const session = await getSession();
  const email = session?.user.email;
  const res = await fetch(`http://localhost:8080/api/users/${email}`);
  const user = await res.json();

  return (
    <UserForm type="edit" user={user} />
  );
};

export default Edit;
