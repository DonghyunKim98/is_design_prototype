import { BotResponseMappedJSONData } from './landing-add-bot-response.type';

import { replaceAllSpaceAndSpecialSymbol } from '@/utils';

type GetBotResponseAndButtons = (
  botResponseMappedJSONData: BotResponseMappedJSONData,
  userMessage: string
) => {
  botMessage: string;
  botButtons: string[] | undefined;
};

export const getBotResponseAndButtons: GetBotResponseAndButtons = (
  botResponseMappedJSONData,
  userMessage
) => {
  let botMessage = '답변을 준비하지 못했습니다.\n궁금한 사항을 다시 입력해주세요.';
  let botButtons = undefined;

  for (const childBot in botResponseMappedJSONData) {
    if (childBot === replaceAllSpaceAndSpecialSymbol(userMessage)) {
      botMessage = botResponseMappedJSONData[childBot].name.message;
      botButtons = botResponseMappedJSONData[childBot].name.buttons;
      break;
    }
    for (const keyword in botResponseMappedJSONData[childBot]) {
      if (keyword === replaceAllSpaceAndSpecialSymbol(userMessage)) {
        botMessage = `${botResponseMappedJSONData[childBot].name.message}
          
          <hr/>
          ${botResponseMappedJSONData[childBot][keyword].message}`;
        botButtons = ['👍', '👎'];
      }
    }
  }

  return { botMessage, botButtons };
};
