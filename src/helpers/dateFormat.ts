import * as dayjs from 'dayjs';

function getHourFromTimestamp(timestamp: number): string {
  const date = dayjs.unix(timestamp);
  return date.format('HH:mm');
}

export { getHourFromTimestamp };