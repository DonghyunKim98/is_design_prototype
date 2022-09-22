import { Box } from '@mui/material';
import dayjs from 'dayjs';
import { isEmpty, isNull } from 'lodash';
import { useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useDidUpdate } from 'rooks';

import { $chats } from '../../landing.state';

import { LandingChatBubblesChatBubbleComponent } from './components';

export const LandingChatBubblesModule = () => {
  const currentChats = useRecoilValue($chats);
  const setCurrentChats = useSetRecoilState($chats);

  const bubbleRef = useRef<HTMLUListElement>(null);

  useDidUpdate(() => {
    if (!isNull(bubbleRef.current)) {
      bubbleRef.current.scrollTop = bubbleRef.current.scrollHeight;
    }
  }, [currentChats]);

  const handlePressBotButton = (botMessage: string) => {
    setCurrentChats((prev) => [
      ...prev,
      {
        host: 'USER',
        message: '챗봇선택: ' + botMessage,
        timestamp: dayjs(),
      },
    ]);
  };

  return (
    <Box ref={bubbleRef} className="flex flex-col flex-1 gap-4 p-4 overflow-y-scroll">
      {!isEmpty(currentChats) &&
        currentChats.map((v) => {
          return (
            <LandingChatBubblesChatBubbleComponent
              onPressBotButton={handlePressBotButton}
              chat={v}
            />
          );
        })}
    </Box>
  );
};
