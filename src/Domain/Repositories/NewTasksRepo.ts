import axios from 'axios';
import { BASEURL, DUPLICATION, NEW } from '../../lib/constants/urls';
import { ErrorHandler } from '../../lib/helpers/errorHandler';
import { EmptyResponse } from '../Entities/EmptyResponseEntity';
import { NewTasksResponse } from '../Entities/TaskEntity';

export const duplicateTask = async (taskId: number): Promise<EmptyResponse> => {
  const { makeErrorData } = ErrorHandler();
  try {
    const response = await axios.post(BASEURL + DUPLICATION, {
      user_id: sessionStorage.getItem('user_id'),
      data: {
        task_id: taskId,
      },
    });

    console.log(response);

    const { data } = response;

    const emptyResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return emptyResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const emptyResponse = {
      status_code: 0,
      data: {},
      error: errorData,
    };
    return emptyResponse;
  }
};

export const newTask = async (
  subject_id: number,
  subject_name: string,
  task_id: number,
  deadline_year: number,
  deadline_month: number,
  deadline_day: number,
  summary: string,
  details: string,
  difficulty: number
): Promise<NewTasksResponse> => {
  const { makeErrorData } = ErrorHandler();
  try {
    const response = await axios.post(BASEURL + NEW, {
      user_id: sessionStorage.getItem('user_id'),
      data: {
        subject_id,
        subject_name,
        task_id,
        deadline_year,
        deadline_month,
        deadline_day,
        summary,
        detail: details,
        difficulty,
      },
    });

    console.log(response);

    const { data } = response;

    const newTaskResponse: NewTasksResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return newTaskResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const newTaskResponse: NewTasksResponse = {
      status_code: 0,
      data: { tasks: [] },
      error: errorData,
    };
    return newTaskResponse;
  }
};
