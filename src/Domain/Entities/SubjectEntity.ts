import { APIError } from './ApiBaseModel';

export type SubjectsResponse = {
  status_code: number;
  data: SubjectData[];
  error?: APIError | undefined;
};

export type SubjectData = {
  name: string;
  subject_id: number;
};
