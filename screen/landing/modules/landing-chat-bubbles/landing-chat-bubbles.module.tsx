import { Box } from '@mui/material';
import { isEmpty, isNull } from 'lodash';
import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { useDidUpdate } from 'rooks';

import { $chats } from '../../landing.state';

import { LandingChatBubblesChatBubbleComponent } from './components';

export const LandingChatBubblesModule = () => {
  const currentChats = useRecoilValue($chats);

  const bubbleRef = useRef<HTMLUListElement>(null);

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
