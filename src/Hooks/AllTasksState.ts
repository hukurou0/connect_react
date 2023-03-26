import { atom } from 'recoil';
import { AllTasksData } from '../Domain/Entities/TaskEntity';

export const allTasksDataState = atom<AllTasksData>({
  key: 'allTasksDataState',
  default: {
    display_ok: {
      subject_taken: false,
      task_regist: false,
    },
    visible_limit: '',
    tasks: [],
  },
});
