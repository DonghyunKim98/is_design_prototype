import { Box } from '@mui/material';
import { isEmpty } from 'lodash';
import { useFormContext } from 'react-hook-form';

import { Chat, EChatHost } from '../../landing.type';

export const LandingChatBubblesModule = () => {
  const { watch } = useFormContext<Chat>();

  const currentUserChat = watch(EChatHost.USER);

  return (
    <Box className="flex-1">
      {!isEmpty(currentUserChat) &&
        watch(EChatHost.USER).map((value) => {
          return <Box key="value">{value}</Box>;
        })}
    </Box>
  );
};
