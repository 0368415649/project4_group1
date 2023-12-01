export function getUnixTimeInSecond(date) {
  return Math.floor(date.getTime());
}

export function getDateFormat(date) {
  return (
    date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
  );
}
