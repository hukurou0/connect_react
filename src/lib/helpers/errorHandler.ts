import { AxiosError } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { Resetter } from 'recoil';
import { APIError } from '../../Domain/Entities/ApiBaseModel';
import { getStatusMassage } from './getStatusMessage';

export const ErrorHandler = () => {
  const makeErrorData = (error: unknown): APIError => {
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

  const catchCustomError = (
    statusCode: number,
    resetLogInState: Resetter,
    navigate?: NavigateFunction | undefined
  ): APIError | undefined => {
    console.log('↓独自定義statusCode');
    console.log(statusCode);
    if ((statusCode === 4 || statusCode === 0) && navigate !== undefined) {
      resetLogInState();
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
  return { makeErrorData, catchCustomError };
};
