import { zeroPad } from './zeroPad';

export const generateDate = (year: number, month: number, day: number): Date => {
  const padMonth = zeroPad(month, 2);
  const padDay = zeroPad(day, 2);
  const date = new Date(`${year}-${padMonth}-${padDay}T00:00:00+09:00`);
  return date;
};
