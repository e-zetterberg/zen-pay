import React from 'react';
import UserForm from '../../../components/UserForm';
import { getSession } from '../../../lib/session';
import { fetchUserByEmail } from '../../../lib/fetching';
import MotionProvider from '../../../components/MotionProvider';

const Edit = async () => {
  const session = await getSession();
  const email = session?.user.email;
  const user = await fetchUserByEmail(email);

  return (
    <MotionProvider>
      <UserForm type="edit" user={user} />
    </MotionProvider>
  );
};

export default Edit;
