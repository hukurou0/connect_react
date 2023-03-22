import { atom } from 'recoil';
import { UserData } from '../Domain/Entities/UserDataEntity';

export const userDataState = atom<UserData>({
  key: 'userDataState',
  default: {
    department: '',
    department_id: 0,
    mail: '',
    username: '',
  },
});
