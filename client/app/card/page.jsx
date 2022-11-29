import React from 'react';
import { getSession } from '../../lib/session';
import CardForm from '../../components/CardForm';
import { fetchUserByEmail } from '../../lib/fetching';

const page = async () => {
  const session = await getSession();
  const email = session?.user.email;
  const user = await fetchUserByEmail(email);

  return (
    <CardForm accountId={user.accountId} />
  );
};

export default page;
