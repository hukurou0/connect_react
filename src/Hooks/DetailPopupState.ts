import { atom } from 'recoil';

export const detailPopupState = atom<boolean>({
  key: 'detailPopupState',
  default: false,
});
