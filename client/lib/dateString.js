const toDateString = (date) => {
  const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const timeString = ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return dateString + timeString;
};

export default toDateString;
