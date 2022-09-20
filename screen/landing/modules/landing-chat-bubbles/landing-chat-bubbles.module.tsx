import { Box } from '@mui/material';
import dayjs from 'dayjs';
import { isEmpty, isNull } from 'lodash';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDidUpdate } from 'rooks';

import { Chats, EChatHost } from '../../landing.type';

export const LandingChatBubblesModule = () => {
  const bubbleRef = useRef<HTMLUListElement>(null);
  const { watch } = useFormContext<Chats>();

  const currentUserChat = watch(EChatHost.USER);

  useDidUpdate(() => {
    if (!isNull(bubbleRef.current)) {
      bubbleRef.current.scrollTop = bubbleRef.current.scrollHeight;
    }
  }, [currentUserChat]);

  return (
    <Box ref={bubbleRef} className="flex flex-col flex-1 gap-4 p-4 overflow-y-scroll">
      {!isEmpty(currentUserChat) &&
        currentUserChat.map((v) => {
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
