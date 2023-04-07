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

export type TimetableResponse = {
  status_code: number;
  data: ClassData[];
  error?: APIError | undefined;
};

export type ClassData = {
  classes: TablesubjectData[];
  taken_id: number;
};

export type TablesubjectData = {
  id: number;
  name: string;
};
