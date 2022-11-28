export const baseApiPath = 'https://zenpay.azurewebsites.net/api';

export const fetchUserByEmail = async (email) => {
  const response = await fetch(`${baseApiPath}/users/${email}`);
  return response.json();
};

export const fetchAccount = async (accountId) => {
  const response = await fetch(`${baseApiPath}/accounts/${accountId}`, {
    cache: 'no-store',
  });
  return response.json();
};

export const fetchUserById = async (userId) => {
  const response = await fetch(`${baseApiPath}/users/user${userId}`, {
    cache: 'no-store',
  });
  return response.json();
};
