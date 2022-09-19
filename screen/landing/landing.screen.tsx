import { Box } from '@mui/material';
import { isEmpty } from 'lodash';
import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { Chat, EChatHost } from './landing.type';
import { LandingTextFieldModule } from './modules';

export const LandingScreen: NextPage = () => {
  const methods = useForm<Chat>({
    defaultValues: { [EChatHost.BOT]: [], [EChatHost.USER]: [] },
  });

  const { watch } = methods;
  const currentUserChat = watch(EChatHost.USER);

  return (
    <FormProvider {...methods}>
      <Box className="flex justify-center w-full">
        <Box className="flex flex-col w-1/2 h-screen bg-gray-200">
          <Box className="flex-1">
            {!isEmpty(currentUserChat) &&
              watch(EChatHost.USER).map((value) => {
                return <Box key="value">{value}</Box>;
              })}
          </Box>
          <LandingTextFieldModule />
        </Box>
      </Box>
    </FormProvider>
  );
};
