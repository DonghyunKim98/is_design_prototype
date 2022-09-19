import { Box } from '@mui/material';
import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

import { Chats, EChatHost } from './landing.type';
import { LandingChatBubblesModule, LandingTextFieldModule } from './modules';

export const LandingScreen: NextPage = () => {
  const methods = useForm<Chats>({
    defaultValues: { [EChatHost.BOT]: [], [EChatHost.USER]: [] },
  });

  return (
    <FormProvider {...methods}>
      <Box className="flex justify-center w-full">
        <Box className="flex flex-col w-1/2 h-screen bg-gray-200">
          <LandingChatBubblesModule />
          <LandingTextFieldModule />
        </Box>
      </Box>
    </FormProvider>
  );
};
