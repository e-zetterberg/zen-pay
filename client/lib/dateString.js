const toDateString = (date) => {
  const dateTime = date.toGMTString().substring(5, 25);

  return dateTime;
};

export default toDateString;
