/* eslint-disable import/prefer-default-export */
export const toDateString = (date) => {
  const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const timeString = ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return dateString + timeString;
};
