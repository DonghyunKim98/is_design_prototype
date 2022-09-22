import { TextField } from '@mui/material';
import { ChangeEvent, KeyboardEventHandler, memo } from 'react';

import { useLandingTextFieldAddUserChat, useLandingTextFieldChangeInput } from './hook';

export const LandingTextFieldModule = memo(() => {
  const { onChangeUserChat, currentUserInputChat } = useLandingTextFieldChangeInput();
  const { submitUserChat, isWaitingBotResponse } = useLandingTextFieldAddUserChat();

  const handlePressEnter: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      submitUserChat();
    }
  };

  const handleChangeTextField = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeUserChat(event.target.value);
  };

  return (
    <TextField
      placeholder="메세지를 입력해주세요"
      className="flex-initial w-full bg-white"
      onChange={handleChangeTextField}
      onKeyPress={handlePressEnter}
      disabled={isWaitingBotResponse}
      value={currentUserInputChat ?? ''}
    />
  );
});
