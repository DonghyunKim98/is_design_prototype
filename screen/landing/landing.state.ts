import { atom } from 'recoil';

import { Chat } from './landing.type';

type Chats = Chat[];

export const $chats = atom<Chats>({
  key: 'chats',
  default: [],
});
