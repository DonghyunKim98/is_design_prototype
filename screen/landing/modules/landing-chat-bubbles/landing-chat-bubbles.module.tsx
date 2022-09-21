import { Box } from '@mui/material';
import { isEmpty, isNull } from 'lodash';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDidUpdate } from 'rooks';

import { ChatForm } from '../../landing.type';

import { LandingChatBubblesChatBubbleComponent } from './components';

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
          return <LandingChatBubblesChatBubbleComponent chat={v} />;
        })}
    </Box>
  );
};
