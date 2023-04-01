import axios from 'axios';
import { BASEURL, GET_USERIFNO } from '../../lib/constants/urls';
import { UserDataResponse } from '../Entities/UserDataEntity';
import { makeErrorData } from '../../lib/helpers/errorHandler';

export const fetchUserData = async (): Promise<UserDataResponse> => {
  try {
    const response = await axios.post(BASEURL + GET_USERIFNO,{
      user_id:sessionStorage.getItem('user_id'),
      data: {
      },
    });

    const { data } = response;
    const userDataResponse: UserDataResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return userDataResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const userDataResponse: UserDataResponse = {
      status_code: 0,
      data: {
        department: '',
        department_id: 0,
        mail: '',
        username: '',
        iso_visible_limit: ''
      },
      error: errorData,
    };
    return userDataResponse;
  }
};
