import dayjs from 'dayjs';
import { useFormContext } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import { $chats } from '../../../../landing.state';
import { Chat, ChatForm } from '../../../../landing.type';

import { sleep } from '@/utils';

export const useLandingTextFieldAddUserChat = () => {
  const { handleSubmit, formState, reset } = useFormContext<ChatForm>();
  const { isSubmitting: isFormSubmitting } = formState;

  const setChats = useSetRecoilState($chats);

  const addUserChat = async (chatData: ChatForm) => {
    const newUserChat: Chat = {
      timestamp: dayjs(),
      message: chatData.message,
      host: 'USER',
    };

    const newBotChat: Chat = {
      timestamp: dayjs(),
      message:
        'ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎ',
      host: 'BOT',
    };

    sleep(1000);

    setChats((prev) => [...prev, newUserChat, newBotChat]);

    reset(undefined, {
      keepValues: false,
    });
  };

  const submitUserChat = async () => {
    await handleSubmit(addUserChat)();
  };

  return { submitUserChat, isFormSubmitting };
};
