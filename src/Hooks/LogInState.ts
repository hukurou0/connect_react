import { atom } from 'recoil';

export const logInState = atom<boolean>({
  key: 'logInState',
  default: false,
});
