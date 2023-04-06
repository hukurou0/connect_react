import { atom } from 'recoil';

export const alertPresentationState = atom<boolean>({
  key: 'alertPresentationState',
  default: false,
});
