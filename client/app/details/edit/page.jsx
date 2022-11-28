import React from 'react';
import UserForm from '../../../components/UserForm';
import { getSession } from '../../../lib/session';
import { fetchUserByEmail } from '../../../lib/fetching';

const Edit = async () => {
  const session = await getSession();
  const email = session?.user.email;
  const user = await fetchUserByEmail(email);

  return (
    <UserForm type="edit" user={user} />
  );
};

export default Edit;
