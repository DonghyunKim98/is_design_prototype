import { Box } from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';
import { memo } from 'react';

import { Chat } from '../../../../landing.type';

import BotLogo from './chatBot_logo.png';

type ChatBubbleComponentProps = {
  chat: Chat;
};

export const LandingChatBubblesChatBubbleComponent = memo<ChatBubbleComponentProps>(
  ({ chat: { message, host, timestamp } }) => {
    if (host === 'BOT') {
      return (
        <Box
          className="flex flex-col items-start flex-initial gap-1 max-w-[60%]"
          key={timestamp.toString()}
        >
          <Box className="flex flex-col items-start gap-2">
            <Image src={BotLogo} width="40" height="40" placeholder="blur" />
            <Box className="flex-initial p-2 bg-white rounded-lg min-w-2">{message}</Box>
          </Box>
          <Box typography="caption">{dayjs(timestamp).format('LT')}</Box>
        </Box>
      );
    }

    return (
      <Box
        className="flex flex-col items-end self-end flex-initial gap-1 max-w-[60%]"
        key={timestamp.toString()}
      >
        <Box className="flex-initial p-2 bg-blue-300 rounded-lg min-w-2">{message}</Box>
        <Box typography="caption">{dayjs(timestamp).format('LT')}</Box>
      </Box>
    );
  }
);
