import { Box } from '@mui/material';
import dayjs from 'dayjs';
import { isEmpty, isNull } from 'lodash';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDidUpdate } from 'rooks';

import { ChatForm } from '../../landing.type';

export const LandingChatBubblesModule = () => {
  const bubbleRef = useRef<HTMLUListElement>(null);
  const { watch } = useFormContext<ChatForm>();

  const currentChats = watch('Chats');

  useDidUpdate(() => {
    if (!isNull(bubbleRef.current)) {
      bubbleRef.current.scrollTop = bubbleRef.current.scrollHeight;
    }
  }, [currentChats]);

  return (
    <Box ref={bubbleRef} className="flex flex-col flex-1 gap-4 p-4 overflow-y-scroll">
      {!isEmpty(currentChats) &&
        currentChats.map((v) => {
          const chatHost = v.host;

          if (chatHost === 'BOT') {
            return (
              <Box
                className="flex flex-col items-start flex-initial gap-1"
                key={v.timestamp.toString()}
              >
                <Box className="flex-initial p-2 bg-white rounded-lg">{v.chat}</Box>
                <Box typography="s1">{dayjs(v.timestamp).format('LT')}</Box>
              </Box>
            );
          }

          return (
            <Box
              className="flex flex-col items-end self-end flex-initial gap-1"
              key={v.timestamp.toString()}
            >
              <Box className="flex-initial p-2 bg-blue-300 rounded-lg">{v.chat}</Box>
              <Box typography="s1">{dayjs(v.timestamp).format('LT')}</Box>
            </Box>
          );
        })}
    </Box>
  );
};
