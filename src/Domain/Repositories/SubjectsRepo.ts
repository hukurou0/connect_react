import axios from 'axios';
import { BASEURL, GET_SUBJECTS, TAKEN, TAKEN_GET_SUBJECT } from '../../lib/constants/urls';
import { SubjectsResponse, TimetableResponse } from '../Entities/SubjectEntity';
import { ErrorHandler } from '../../lib/helpers/errorHandler';
import { EmptyResponse } from '../Entities/EmptyResponseEntity';

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

export const timeTableSubjects = async (): Promise<TimetableResponse> => {
  const { makeErrorData } = ErrorHandler();
  try {
    const response = await axios.post(BASEURL + TAKEN_GET_SUBJECT, {
      user_id: sessionStorage.getItem('user_id'),
      data: {},
    });

    const { data } = response;

    console.log(response.data.data);

    const subjectsResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return subjectsResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const subjectsResponse = {
      status_code: 0,
      data: [],
      error: errorData,
    };
    return subjectsResponse;
  }
};

export const postTimetableSubjects = async (id: number[]): Promise<EmptyResponse> => {
  const { makeErrorData } = ErrorHandler();
  try {
    const response = await axios.post(BASEURL + TAKEN, {
      user_id: sessionStorage.getItem('user_id'),
      data: {
        subject_id: id,
      },
    });

    const { data } = response;

    console.log(response.data.data);

    const subjectsResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return subjectsResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const subjectsResponse = {
      status_code: 0,
      data: [],
      error: errorData,
    };
    return subjectsResponse;
  }
};
