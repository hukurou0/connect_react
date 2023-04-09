import axios from 'axios';
import { BASEURL, GET_TIMETABLE } from '../../lib/constants/urls';
import { ErrorHandler } from '../../lib/helpers/errorHandler';
import { UserTimetableResponse } from '../Entities/UserTimetableEntity';

export const getTimetable = async (): Promise<UserTimetableResponse> => {
  const { makeErrorData } = ErrorHandler();
  try {
    const response = await axios.post(BASEURL + GET_TIMETABLE, {
      user_id: sessionStorage.getItem('user_id'),
      data: {},
    });
    const { data } = response;

    const subjectsResponse: UserTimetableResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return subjectsResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const subjectsResponse: UserTimetableResponse = {
      status_code: 0,
      data: {
        timeTable: [{ name: '', room: '' }],
      },
      error: errorData,
    };
    return subjectsResponse;
  }
};
