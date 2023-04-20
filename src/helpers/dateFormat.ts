import * as dayjs from 'dayjs';

function getHourFromTimestamp(timestamp: number): string {
  const date = dayjs.unix(timestamp);
  return date.format('HH:mm');
}

function getCompleteDateFromTimestamp(timestamp: number): string {
  const date = dayjs.unix(timestamp);
  return date.format('DD/MM HH:mm');
}

export { getHourFromTimestamp, getCompleteDateFromTimestamp };