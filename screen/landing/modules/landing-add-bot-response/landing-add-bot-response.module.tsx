import dayjs from 'dayjs';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useDidUpdate } from 'rooks';

import { $chats } from '../../landing.state';
import { Chat } from '../../landing.type';

/**
 * Controller 만 담당하는 Module
 * No View
 */
export const LandingAddBotResponseModule = () => {
  const currentChats = useRecoilValue($chats);
  const setCurrentChats = useSetRecoilState($chats);

  useDidUpdate(() => {
    const lastChat = currentChats[currentChats.length - 1];

    if (lastChat.host === 'BOT') {
      return;
    }

    const newBotChat: Chat = {
      timestamp: dayjs(),
      message: '내가 최고입니다.',
      host: 'BOT',
    };

    setCurrentChats((prev) => [...prev, newBotChat]);
  }, [currentChats]);

  return null;
};
