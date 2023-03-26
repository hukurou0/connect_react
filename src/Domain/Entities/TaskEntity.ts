import { APIError } from './ApiBaseModel';

export type DuplicatedTaskResponse = {
  status_code: number;
  data: { tasks: TaskData[] };
  error?: APIError | undefined;
};

export type AllTasksResponse = {
  status_code: number;
  data: AllTasksData;
  error?: APIError | undefined;
};

export type AllTasksData = {
  display_ok: {
    subject_taken: boolean;
    task_regist: boolean;
  };
  visible_limit: string;
  tasks: TaskData[];
};

export type TaskData = {
  subject_id: number;
  subject_name: string;
  task_id: number;
  deadline_year: number;
  deadline_month: number;
  deadline_day: number;
  summary: string;
  detail: string;
  difficulty: number;
};
