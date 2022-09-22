import { useRef } from 'react';
import { useFormContext, useController } from 'react-hook-form';

import { ChatForm } from '../../../../landing.type';

export const useLandingTextFieldChangeInput = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { control } = useFormContext<ChatForm>();
  const {
    field: { onChange, value: currentUserInputChat },
  } = useController({ name: 'message', control });

  const onChangeUserChat = (newChat: string) => {
    onChange(newChat);
  };

  return { inputRef, onChangeUserChat, currentUserInputChat };
};
