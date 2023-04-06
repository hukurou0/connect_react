import axios from 'axios';
import { BASEURL, GET_SUBJECTS } from '../../lib/constants/urls';
import { SubjectsResponse } from '../Entities/SubjectEntity';
import { ErrorHandler } from '../../lib/helpers/errorHandler';

export const fetchSubjects = async (): Promise<SubjectsResponse> => {
  const { makeErrorData } = ErrorHandler();
  try {
    const response = await axios.post(BASEURL + GET_SUBJECTS, {
      user_id: sessionStorage.getItem('user_id'),
      data: {},
    });
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
