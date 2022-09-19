import { Box } from '@mui/material';
import dayjs from 'dayjs';
import { isEmpty } from 'lodash';
import { useFormContext } from 'react-hook-form';

import { Chats, EChatHost } from '../../landing.type';

export const LandingChatBubblesModule = () => {
  const { watch } = useFormContext<Chats>();

  const currentUserChat = watch(EChatHost.USER);

  return (
    <Box className="flex flex-col flex-1 gap-4 p-4 overflow-y-scroll">
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
