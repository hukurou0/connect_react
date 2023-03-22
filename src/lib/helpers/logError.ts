import { AxiosError } from 'axios';

export const logError = (error: AxiosError) => {
  console.log(error);
};
