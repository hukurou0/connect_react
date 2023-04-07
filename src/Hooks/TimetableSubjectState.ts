import { atom } from 'recoil';
import { ClassData } from '../Domain/Entities/SubjectEntity';

export const timetableState = atom<ClassData[]>({
  key: 'timetableState',
  default: [],
});
