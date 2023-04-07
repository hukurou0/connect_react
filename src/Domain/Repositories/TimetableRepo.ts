import axios from 'axios';
import { BASEURL, GET_TIMETABLE } from '../../lib/constants/urls';
import { ErrorHandler } from '../../lib/helpers/errorHandler';
import { UserTimetalbeResponse } from '../Entities/UserTimetableEntity';

export const getTimetable = async (): Promise<UserTimetalbeResponse> => {
  const { makeErrorData } = ErrorHandler();
  try {
    const response = await axios.post(BASEURL + GET_TIMETABLE, {
      user_id: sessionStorage.getItem('user_id'),
      data: {},
    });
    const { data } = response;

    const subjectsResponse: UserTimetalbeResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return subjectsResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const subjectsResponse: UserTimetalbeResponse = {
      status_code: 0,
      data: [],
      error: errorData,
    };
    return subjectsResponse;
  }
};
