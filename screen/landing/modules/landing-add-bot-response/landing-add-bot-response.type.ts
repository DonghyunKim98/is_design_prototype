type BotName = {
  name: {
    message: string;
    buttons: string[];
  };
};

export type BotResponseMappedJSONData = {
  [key: string]: BotName & {
    [key2: string]: {
      message: string;
      buttons?: string[];
    };
  };
};
