import axios from 'axios';
import { BASEURL, LOGIN, SIGNUP } from '../../lib/constants/urls';
import { AuthResponse } from '../Entities/AuthEntity';
import { makeErrorData } from '../../lib/helpers/errorHandler';

export const logIn = async (username: string, password: string): Promise<AuthResponse> => {
  try {
    const response = await axios.post(BASEURL + LOGIN, {
      data: {
        username,
        password,
      },
    });
    const { data } = response;
    const logInResponse: AuthResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return logInResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const authResponse: AuthResponse = {
      status_code: 0,
      data: {},
      error: errorData,
    };
    return authResponse;
  }
};

export const signUp = async (username: string, password: string, departmentId: number): Promise<AuthResponse> => {
  try {
    const response = await axios.post(BASEURL + SIGNUP, {
      data: {
        username,
        password,
        department_id: departmentId,
      },
    });
    const { data } = response;
    const signUpResponse: AuthResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return signUpResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const signUpResponse: AuthResponse = {
      status_code: 0,
      data: {},
      error: errorData,
    };
    return signUpResponse;
  }
};
