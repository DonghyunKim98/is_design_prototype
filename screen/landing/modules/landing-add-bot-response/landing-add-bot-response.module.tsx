import dayjs from 'dayjs';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useDidUpdate, useTimeoutWhen } from 'rooks';

import { $chats } from '../../landing.state';
import { Chat } from '../../landing.type';

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

    const newBotChat: Chat = {
      timestamp: dayjs(),
      message: '내가 최고입니다.',
      host: 'BOT',
      loading: true,
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
