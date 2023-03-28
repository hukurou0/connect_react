import axios from 'axios';
import { BASEURL, CHECK } from '../../lib/constants/urls';
import { makeErrorData } from '../../lib/helpers/errorHandler';
import { DuplicatedTaskResponse, TaskData } from '../Entities/TaskEntity';

interface CheckTaskParmas {
  subject_id: number;
  deadline_year: number;
  deadline_month: number;
  deadline_day: number;
}

export const registeredTasks = async ({ subject_id, deadline_year, deadline_month, deadline_day }: CheckTaskParmas) => {
  try {
    const response = await axios.post(BASEURL + CHECK, {
      data: {
        subject_id: subject_id,
        deadline_year: deadline_year,
        deadline_month: deadline_month,
        deadline_day: deadline_day,
      },
    });

    /** This is for test */
    const sampleTask: TaskData = {
      subject_id: 1,
      subject_name: '',
      task_id: 1,
      deadline_year: 2023,
      deadline_month: 4,
      deadline_day: 13,
      summary: 'Test',
      detail: 'Test Details',
      difficulty: 4,
    };
    const twoSample = { tasks: [sampleTask] };

    const { data } = response;
    const duplicatedTaskResponse: DuplicatedTaskResponse = {
      status_code: data.status_code,
      data: twoSample,
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
