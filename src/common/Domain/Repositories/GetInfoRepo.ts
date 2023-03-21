import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASEURL, GET_INFO } from '../../../lib/constants/urls';
import { logError } from '../../LogError';

export const getInfo = (completion: (data: any) => void) => {
  axios
    .get(BASEURL + GET_INFO)
    .then((response: AxiosResponse) => {
      const { data } = response;
      completion(data);
    })
    .catch((error: AxiosError) => {
      logError(error)
    });
};
