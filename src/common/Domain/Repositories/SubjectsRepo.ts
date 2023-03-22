import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASEURL, GET_SUBJECTS } from '../../../lib/constants/urls';
import { SubjectData } from '../Entities/SubjectEntity';
import { logError } from '../../../lib/helpers/logError';

export const fetchSubjects = (completion: (data: SubjectData[]) => void) => {
  axios
    .get(BASEURL + GET_SUBJECTS)
    .then((response: AxiosResponse) => {
      completion(response.data.data);
    })
    .catch((error: AxiosError) => {
      logError(error);
    });
};