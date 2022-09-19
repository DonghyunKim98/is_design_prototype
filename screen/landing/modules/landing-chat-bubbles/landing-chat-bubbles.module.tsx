import { Box } from '@mui/material';
import { isEmpty } from 'lodash';
import { useFormContext } from 'react-hook-form';

import { Chats, EChatHost } from '../../landing.type';

export const LandingChatBubblesModule = () => {
  const { watch } = useFormContext<Chats>();

  const currentUserChat = watch(EChatHost.USER);

  return (
    <Box className="flex-1">
      {!isEmpty(currentUserChat) &&
        currentUserChat.map((v) => {
          return <Box key={v.timestamp.toString()}>{v.chat}</Box>;
        })}
    </Box>
  );
};
