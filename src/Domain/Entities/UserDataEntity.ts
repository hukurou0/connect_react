import { APIError } from './ApiBaseModel';

export type UserDataResponse = {
  status_code: number;
  data: UserData;
  error?: APIError | undefined;
};

export type UserData = {
  department: string;
  department_id: number;
  mail: string;
  username: string;
};
