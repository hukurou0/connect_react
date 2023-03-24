import { APIError } from './ApiBaseModel';

export type EmptyResponse = {
  status_code: number;
  data: {};
  error?: APIError | undefined;
};
