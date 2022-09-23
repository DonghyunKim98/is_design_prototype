import dayjs from 'dayjs';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useDidUpdate, useTimeoutWhen } from 'rooks';

import { $chats } from '../../landing.state';
import { Chat } from '../../landing.type';

import botResponseJSONData from './bot_response.json';
import { getBotResponseAndButtons } from './landing-add-bot-response.method';
import { BotResponseMappedJSONData } from './landing-add-bot-response.type';

const botResponseMappedJSONData = JSON.parse(
  JSON.stringify(botResponseJSONData)
) as BotResponseMappedJSONData;

/**
 * Controller 만 담당하는 Module
 * No View
 */
export const LandingAddBotResponseModule = () => {
  const currentChats = useRecoilValue($chats);
  const setCurrentChats = useSetRecoilState($chats);

  const lastChat = currentChats[currentChats.length - 1];
  const isWaitingBotResponse = lastChat?.host === 'BOT' && lastChat?.loading;

  useDidUpdate(() => {
    const lastChat = currentChats[currentChats.length - 1];

    if (lastChat.host === 'BOT') {
      return;
    }

    const userMessage = lastChat.message;

    const { botMessage, botButtons } = getBotResponseAndButtons(
      botResponseMappedJSONData,
      userMessage
    );

    const newBotChat: Chat = {
      timestamp: dayjs(),
      message: botMessage,
      host: 'BOT',
      loading: true,
      buttons: botButtons,
    };

    setCurrentChats((prev) => [...prev, newBotChat]);
  }, [currentChats]);

  useTimeoutWhen(
    () => {
      setCurrentChats((prev) => [...prev.slice(0, -1), { ...lastChat, loading: false }]);
    },
    1000,
    isWaitingBotResponse
  );

  return null;
};
