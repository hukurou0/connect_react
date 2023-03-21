import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASEURL, LOGOUT } from '../../../lib/constants/urls';
import { logError } from '../../LogError';

export const logout = (completion: (data: any) => void) => {
  axios
    .get(BASEURL + LOGOUT)
    .then((response: AxiosResponse) => {
      const { data } = response;
      completion(data);
    })
    .catch((error: AxiosError) => {
      logError(error);
    });
};
