import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASEURL, GET_DEPARTMENTS } from '../../../lib/constants/urls';
import { DepartmentData } from '../Entities/DepartmentEntity';
import { logError } from '../../LogError';

export const fetchDepartments = (completion: (data: DepartmentData[]) => void) => {
  axios
    .get(BASEURL + GET_DEPARTMENTS)
    .then((response: AxiosResponse) => {
      completion(response.data.data);
    })
    .catch((error: AxiosError) => {
      logError(error);
    });
};
