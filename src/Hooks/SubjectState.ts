import { atom } from 'recoil';
import { SubjectData } from '../Domain/Entities/SubjectEntity';

export const subjectsState = atom<SubjectData[]>({
  key: 'subjectsState',
  default: [],
});
