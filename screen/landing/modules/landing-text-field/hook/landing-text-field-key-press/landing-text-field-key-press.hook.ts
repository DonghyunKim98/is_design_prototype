import dayjs from 'dayjs';
import { isNull } from 'lodash';
import { KeyboardEventHandler, useRef } from 'react';
import { useFormContext, useController } from 'react-hook-form';

import { Chat, ChatForm } from '../../../../landing.type';

export const useLandingTextFieldKeyPress = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { control } = useFormContext<ChatForm>();
  const {
    field: { onChange, value: currentChats },
  } = useController({ name: 'Chats', control });

  const addUserChat: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLTextAreaElement;

      const newUserChat: Chat = {
        timestamp: dayjs(),
        chat: target.value,
        host: 'USER',
      };

      const newBotChat: Chat = {
        timestamp: dayjs(),
        chat: '안녕',
        host: 'BOT',
      };

      onChange([...currentChats, newUserChat, newBotChat]);

      if (!isNull(inputRef.current)) {
        const currentInputRef = inputRef.current;

        currentInputRef.value = '';
      }
    }
  };

  return { inputRef, addUserChat };
};
