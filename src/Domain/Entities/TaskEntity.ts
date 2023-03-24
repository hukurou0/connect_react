import { APIError } from './ApiBaseModel';

export type DuplicatedTaskResponse = {
  status_code: number;
  data: { tasks: TaskData[] };
  error?: APIError | undefined;
};

export type TaskListResponse = {
  status_code: number;
  data: {
    canDisplay: {
      subjectTaken: boolean;
      taskRegistered: boolean;
    };
    tasks: TaskData[];
  };
  error?: APIError | undefined;
};

export type TaskData = {
  subjectId: number;
  taskId: number;
  deadlineYear: number;
  deadlineMonth: number;
  deadlineDay: number;
  summary: string;
  detail: string;
  difficulty: number;
};
