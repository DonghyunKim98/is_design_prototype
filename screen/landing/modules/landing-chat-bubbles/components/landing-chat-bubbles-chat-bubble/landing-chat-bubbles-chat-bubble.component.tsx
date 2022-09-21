import { Box } from '@mui/material';
import dayjs from 'dayjs';
import { memo } from 'react';

import { Chat } from '../../../../landing.type';

type ChatBubbleComponentProps = {
  chat: Chat;
};

export const LandingChatBubblesChatBubbleComponent = memo<ChatBubbleComponentProps>(
  ({ chat: { message, host, timestamp } }) => {
    if (host === 'BOT') {
      return (
        <Box className="flex flex-col items-start flex-initial gap-1" key={timestamp.toString()}>
          <Box className="flex-initial p-2 bg-white rounded-lg">{message}</Box>
          <Box typography="s1">{dayjs(timestamp).format('LT')}</Box>
        </Box>
      );
    }

    return (
      <Box
        className="flex flex-col items-end self-end flex-initial gap-1"
        key={timestamp.toString()}
      >
        <Box className="flex-initial p-2 bg-blue-300 rounded-lg">{message}</Box>
        <Box typography="s1">{dayjs(timestamp).format('LT')}</Box>
      </Box>
    );
  }
);
