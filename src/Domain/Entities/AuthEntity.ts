import { APIError } from './ApiBaseModel';

export type AuthResponse = {
  status_code: number;
  data: AuthData;
  error?: APIError | undefined;
};

export type AuthData = {};
