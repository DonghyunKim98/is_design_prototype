import dayjs from 'dayjs';
import { isNull } from 'lodash';
import { KeyboardEventHandler, useRef } from 'react';
import { useFormContext, useController } from 'react-hook-form';

import { Chats, EChatHost } from '../../../../landing.type';

export const useLandingTextFieldKeyPress = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { control } = useFormContext<Chats>();
  const {
    field: { onChange, value: currentUserChat },
  } = useController({ name: EChatHost.USER, control });

  const addUserChat: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLTextAreaElement;

      onChange([...currentUserChat, { timestamp: dayjs(), chat: target.value }]);

      if (!isNull(inputRef.current)) {
        const currentInputRef = inputRef.current;

        currentInputRef.value = '';
      }
    }
  };

  return { inputRef, addUserChat };
};
