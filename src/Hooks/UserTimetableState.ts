import { atom } from 'recoil';
import { TimetableData } from '../Domain/Entities/UserTimetableEntity';

export const userTableDataState = atom<TimetableData>({
  key: 'userTableDataState',
  default: {
    timeTable: [],
  },
});
