import { atom } from 'recoil';
import { TaskData } from '../Domain/Entities/TaskEntity';

export const registeredTasksState = atom<TaskData[]>({
  key: 'registeredTasksState',
  default: [],
});
