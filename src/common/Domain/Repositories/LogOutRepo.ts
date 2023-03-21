import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASEURL, LOGOUT } from '../../../lib/constants/urls';

export const logout = (completion: (data: any) => void) => {
  axios
    .get(BASEURL + LOGOUT)
    .then((response: AxiosResponse) => {
      console.log(response.status);

      const { data } = response;
      completion(data);
    })
    .catch((error: AxiosError) => {
      console.log(error.message);
    });
};
