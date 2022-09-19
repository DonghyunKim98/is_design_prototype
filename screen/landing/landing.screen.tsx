import { Box, TextField } from '@mui/material';
import { isEmpty, isUndefined } from 'lodash';
import { NextPage } from 'next';
import { KeyboardEventHandler, useRef } from 'react';
import { useController, useForm } from 'react-hook-form';

import { Chat, EChatHost } from './landing.type';

export const LandingScreen: NextPage = () => {
  const { control, watch } = useForm<Chat>({
    defaultValues: { [EChatHost.BOT]: [], [EChatHost.USER]: [] },
  });
  const inputRef = useRef();
  const {
    field: { onChange, value: currentUserChat },
  } = useController({ name: EChatHost.USER, control });

  const handlePressEnter: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLTextAreaElement;

      onChange([...currentUserChat, target.value]);

      if (!isUndefined(inputRef.current)) {
        const currentInputRef = inputRef.current as HTMLTextAreaElement;

        currentInputRef.value = '';
      }
    }
  };

  return (
    <Box className="flex justify-center w-full">
      <Box className="flex flex-col w-1/2 h-screen bg-gray-200">
        <Box className="flex-1">
          {!isEmpty(currentUserChat) &&
            watch(EChatHost.USER).map((value) => {
              return <Box key="value">{value}</Box>;
            })}
        </Box>
        <TextField
          inputRef={inputRef}
          className="flex-initial w-full"
          onKeyPress={handlePressEnter}
        />
      </Box>
    </Box>
  );
};
