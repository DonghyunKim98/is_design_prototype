import { isUndefined } from 'lodash';
import { KeyboardEventHandler, useRef } from 'react';
import { useFormContext, useController } from 'react-hook-form';

import { Chat, EChatHost } from '../../../../landing.type';

export const useLandingTextFieldKeyPress = () => {
  const inputRef = useRef();
  const { control } = useFormContext<Chat>();
  const {
    field: { onChange, value: currentUserChat },
  } = useController({ name: EChatHost.USER, control });

  const addUserChat: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLTextAreaElement;

      onChange([...currentUserChat, target.value]);

      if (!isUndefined(inputRef.current)) {
        const currentInputRef = inputRef.current as HTMLTextAreaElement;

        currentInputRef.value = '';
      }
    }
  };

  return { inputRef, addUserChat };
};
