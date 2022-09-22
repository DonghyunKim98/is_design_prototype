import { Box, Button } from '@mui/material';
import dayjs from 'dayjs';
import { isUndefined } from 'lodash';
import Image from 'next/image';
import { memo } from 'react';

import { Chat } from '../../../../landing.type';

import BotLogo from './chatBot_logo.png';

type ChatBubbleComponentProps = {
  chat: Chat;
  onPressBotButton: (botMessage: string) => void;
};

export const LandingChatBubblesChatBubbleComponent = memo<ChatBubbleComponentProps>(
  ({ chat: { message, host, timestamp, buttons }, onPressBotButton }) => {
    if (host === 'BOT') {
      return (
        <Box
          className="flex flex-col items-start flex-initial gap-1 max-w-[70%]"
          key={timestamp.toString()}
        >
          <Box className="flex flex-col items-start gap-2">
            <Image src={BotLogo} width="80" height="50" placeholder="blur" />
            <Box className="flex flex-col flex-initial gap-2 p-2 bg-white rounded-lg min-w-2">
              {message}
              <Box className="flex flex-wrap justify-between gap-2">
                {!isUndefined(buttons) &&
                  buttons.map((v) => {
                    return (
                      <Button
                        onClick={() => onPressBotButton(v)}
                        variant="contained"
                        key={v}
                        className="w-[47.5%]"
                        sx={{ typography: 'subtitle2' }}
                      >
                        {v}
                      </Button>
                    );
                  })}
              </Box>
            </Box>
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
