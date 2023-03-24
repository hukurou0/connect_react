import axios from 'axios';
import { BASEURL, GET_SUBJECTS } from '../../lib/constants/urls';
import { SubjectsResponse } from '../Entities/SubjectEntity';
import { makeErrorData } from '../../lib/helpers/errorHandler';

export const fetchSubjects = async (): Promise<SubjectsResponse> => {
  try {
    const response = await axios.get(BASEURL + GET_SUBJECTS);
    const { data } = response;
    const subjectsResponse: SubjectsResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return subjectsResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const subjectsResponse: SubjectsResponse = {
      status_code: 0,
      data: [],
      error: errorData,
    };
    return subjectsResponse;
  }
};
