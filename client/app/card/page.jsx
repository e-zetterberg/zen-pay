import React from 'react';
import { getSession } from '../../lib/session';
import CardForm from '../../components/CardForm';
import { fetchUserByEmail } from '../../lib/fetching';
import MotionProvider from '../../components/MotionProvider';

const page = async () => {
  const session = await getSession();
  const email = session?.user.email;
  const user = await fetchUserByEmail(email);

  return (
    <MotionProvider>
      <CardForm accountId={user.accountId} />
    </MotionProvider>
  );
};

export default page;
