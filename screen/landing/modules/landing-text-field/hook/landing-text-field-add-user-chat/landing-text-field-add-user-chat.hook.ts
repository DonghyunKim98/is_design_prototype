import dayjs from 'dayjs';
import { useFormContext } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { $chats } from '../../../../landing.state';
import { Chat, ChatForm } from '../../../../landing.type';

export const useLandingTextFieldAddUserChat = () => {
  const { handleSubmit, reset } = useFormContext<ChatForm>();

  const currentChats = useRecoilValue($chats);
  const lastChat = currentChats[currentChats.length - 1];

  const isWaitingBotResponse = lastChat?.host === 'BOT' && lastChat?.loading;

  const setChats = useSetRecoilState($chats);

  const addUserChat = async (chatData: ChatForm) => {
    const newUserChat: Chat = {
      timestamp: dayjs(),
      message: chatData.message,
      host: 'USER',
    };

    setChats((prev) => [...prev, newUserChat]);

    reset();
  };

  const submitUserChat = async () => {
    await handleSubmit(addUserChat)();
  };

  return { submitUserChat, isWaitingBotResponse };
};
