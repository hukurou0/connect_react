import { AxiosError } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { APIError } from '../../Domain/Entities/ApiBaseModel';
import { getStatusMassage } from './getStatusMessage';

export const makeErrorData = (error: unknown): APIError => {
  console.log(error);

  let errorData: APIError;
  if (error instanceof AxiosError) {
    errorData = {
      status: error.response?.status ?? 99,
      code: error.code ?? '',
      message: error.message,
    };
  } else {
    errorData = {
      status: 99,
      code: '',
      message: 'Unexpected Error',
    };
  }
  return errorData;
};

export const catchCustomError = (statusCode: number, navigate?: NavigateFunction | undefined): APIError | undefined => {
  console.log("↓独自定義statusCode");
  console.log(statusCode);
  if ((statusCode === 4 || statusCode === 0) && navigate !== undefined) {
    console.log("goin' back");
    navigate('/login');
    return undefined;
  }
  if (statusCode !== 1) {
    const errorData: APIError = {
      status: statusCode,
      code: '',
      message: getStatusMassage(statusCode),
    };
    return errorData;
  }
  return undefined;
};
