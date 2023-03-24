import axios from 'axios';
import { BASEURL, CHECK } from '../../lib/constants/urls';
import { makeErrorData } from '../../lib/helpers/errorHandler';
import { DuplicatedTaskResponse, TaskData } from '../Entities/TaskEntity';

interface CheckTaskParmas {
  subjectId: number;
  deadlineYear: number;
  deadlineMonth: number;
  deadlineDay: number;
}

export const registeredTasks = async ({ subjectId, deadlineYear, deadlineMonth, deadlineDay }: CheckTaskParmas) => {
  try {
    const response = await axios.post(BASEURL + CHECK, {
      data: {
        subject_id: subjectId,
        deadline_year: deadlineYear,
        deadline_month: deadlineMonth,
        deadline_day: deadlineDay,
      },
    });

    /** This is for test */
    const emptySample = { tasks: [] };
    const sampleTask: TaskData = {
      subjectId: 1,
      taskId: 1,
      deadlineYear: 2023,
      deadlineMonth: 4,
      deadlineDay: 13,
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
