import { Dayjs } from 'dayjs';

export type ChaTHost = 'BOT' | 'USER';

export type Chat = {
  host: ChaTHost;
  timestamp: Dayjs;
  chat: string;
};

export type Chats = Chat[];

export type ChatForm = {
  Chats: Chats;
};
