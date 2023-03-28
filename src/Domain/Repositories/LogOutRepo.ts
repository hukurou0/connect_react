import axios from 'axios';
import { BASEURL, LOGOUT } from '../../lib/constants/urls';
import { EmptyResponse } from '../Entities/EmptyResponseEntity';
import { makeErrorData } from '../../lib/helpers/errorHandler';

export const logout = async (): Promise<EmptyResponse> => {
  try {
    const response = await axios.get(BASEURL + LOGOUT);

    const { data } = response;
    const emptyResponse: EmptyResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return emptyResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const emptyResponse: EmptyResponse = {
      status_code: 0,
      data: {},
      error: errorData,
    };
    return emptyResponse;
  }
};
