export enum EChatHost {
  'BOT' = 'BOT',
  'USER' = 'USER',
}

export type Chat = {
  [EChatHost.BOT]: string[];
  [EChatHost.USER]: string[];
};
