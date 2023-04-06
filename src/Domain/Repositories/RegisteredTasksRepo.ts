import axios from 'axios';
import { BASEURL, CHECK } from '../../lib/constants/urls';
import { ErrorHandler } from '../../lib/helpers/errorHandler';
import { DuplicatedTaskResponse } from '../Entities/TaskEntity';

interface CheckTaskParmas {
  user_id: string;
  subject_id: number;
  deadline_year: number;
  deadline_month: number;
  deadline_day: number;
}

export const registeredTasks = async ({
  user_id,
  subject_id,
  deadline_year,
  deadline_month,
  deadline_day,
}: CheckTaskParmas) => {
  const { makeErrorData } = ErrorHandler();
  try {
    const response = await axios.post(BASEURL + CHECK, {
      user_id: sessionStorage.getItem('user_id'),
      data: {
        subject_id: subject_id,
        deadline_year: deadline_year,
        deadline_month: deadline_month,
        deadline_day: deadline_day,
      },
    });
    console.log(response.data);

    // /** This is for test */
    // const sampleTask: TaskData = {
    //   subject_id: 1,
    //   subject_name: '',
    //   task_id: 1,
    //   deadline_year: 2023,
    //   deadline_month: 4,
    //   deadline_day: 13,
    //   summary: 'Test',
    //   detail: 'Test Details',
    //   difficulty: 4,
    // };
    // const twoSample = { tasks: [sampleTask] };

    const { data } = response;
    const duplicatedTaskResponse: DuplicatedTaskResponse = {
      status_code: data.status_code,
      data: response.data,
    };
    return duplicatedTaskResponse;
  } catch (error) {
    const errorData = makeErrorData(error);
    const duplicatedTaskResponse: DuplicatedTaskResponse = {
      status_code: 0,
      data: { tasks: [] },
      error: errorData,
    };
    return duplicatedTaskResponse;
  }
};
