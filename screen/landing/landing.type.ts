import { Dayjs } from 'dayjs';

export type ChatHost = 'BOT' | 'USER';

export type Chat = {
  host: ChatHost;
  timestamp: Dayjs;
  message: string;
};

export type ChatForm = {
  message: string;
};
