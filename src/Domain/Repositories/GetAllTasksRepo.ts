import axios from 'axios';
import { BASEURL, GET_TASKS } from '../../lib/constants/urls';
import { makeErrorData } from '../../lib/helpers/errorHandler';
import { AllTasksResponse } from '../Entities/TaskEntity';

export const fetchAllTasks = async (): Promise<AllTasksResponse> => {
  try {
    const response = await axios.get(BASEURL + GET_TASKS);
    const { data } = response;
    const allTasksResponse: AllTasksResponse = {
      status_code: data.status_code,
      data: {
        display_ok: {
          subject_taken: data.data.display_ok.subject_taken,
          task_regist: data.data.display_ok.task_regist,
        },
        visible_limit: data.data.visible_limit,
        tasks: data.data.tasks,
      },
    };
    return allTasksResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const allTasksResponse: AllTasksResponse = {
      status_code: 0,
      data: {
        display_ok: {
          subject_taken: false,
          task_regist: false,
        },
        visible_limit: '',
        tasks: [],
      },
      error: errorData,
    };
    return allTasksResponse;
  }
};
