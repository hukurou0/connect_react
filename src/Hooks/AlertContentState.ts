import { atom } from 'recoil';
import { AlertContent } from '../Domain/Entities/AlertContentEntity';

export const alertContentState = atom<AlertContent>({
  key: 'alertContentState',
  default: { title: '', message: '' },
});
