import { TextField } from '@mui/material';
import { KeyboardEventHandler, memo } from 'react';

import { useLandingTextFieldKeyPress } from './hook';

export const LandingTextFieldModule = memo(() => {
  const { inputRef, addUserChat } = useLandingTextFieldKeyPress();

  const handlePressEnter: KeyboardEventHandler<HTMLDivElement> = (e) => {
    addUserChat(e);
  };

  return (
    <TextField
      placeholder="메세지를 입력해주세요"
      inputRef={inputRef}
      className="flex-initial w-full"
      onKeyPress={handlePressEnter}
    />
  );
});
