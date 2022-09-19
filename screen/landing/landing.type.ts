import { Dayjs } from 'dayjs';

export enum EChatHost {
  'BOT' = 'BOT',
  'USER' = 'USER',
}

type Chat = {
  timestamp: Dayjs;
  chat: string;
};

export type Chats = {
  [EChatHost.BOT]: Chat[];
  [EChatHost.USER]: Chat[];
};
