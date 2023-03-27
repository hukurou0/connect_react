import { atom } from 'recoil';
import { TaskData } from '../Domain/Entities/TaskEntity';

export const userTasksState = atom<TaskData[]>({
  key: 'userTasksState',
  default: [],
});
