import axios from 'axios';
import { BASEURL, DELETE_TASK, GET_USER_TASKS } from '../../lib/constants/urls';
import { ErrorHandler } from '../../lib/helpers/errorHandler';
import { TaskData, UserTasksResponse } from '../Entities/TaskEntity';
import { EmptyResponse } from '../Entities/EmptyResponseEntity';

export const fetchUserTasks = async (): Promise<UserTasksResponse> => {
  const { makeErrorData } = ErrorHandler();
  try {
    const response = await axios.get(BASEURL + GET_USER_TASKS);
    const { data } = response;
    const userTasksResponse: UserTasksResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return userTasksResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const userTasksResponse: UserTasksResponse = {
      status_code: 0,
      data: { tasks: [] },
      error: errorData,
    };
    return userTasksResponse;
  }
};

export const deleteUserTask = async (task: TaskData): Promise<EmptyResponse> => {
  const { makeErrorData } = ErrorHandler();
  try {
    const response = await axios.post(BASEURL + DELETE_TASK, {
      data: {
        task_id: task.task_id,
      },
    });

    const { data } = response;
    const emptyResponse: EmptyResponse = {
      status_code: data.status_code,
      data: data.data,
    };
    return emptyResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const emptyResponse: EmptyResponse = {
      status_code: 0,
      data: {},
      error: errorData,
    };
    return emptyResponse;
  }
};
