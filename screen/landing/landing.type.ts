import { Dayjs } from 'dayjs';

export type ChatHost = 'BOT' | 'USER';

export type Chat = {
  host: ChatHost;
  timestamp: Dayjs;
  message: string;
};

export type Chats = Chat[];

export type ChatForm = {
  Chats: Chats;
};
