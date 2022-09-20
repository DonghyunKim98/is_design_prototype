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
      <Box className="flex items-center justify-center w-screen h-screen gap-4">
        <Box className="flex flex-col flex-none bg-gray-100 w-96 aspect-5/8">
          <LandingChatBubblesModule />
          <LandingTextFieldModule />
        </Box>
      </Box>
    </FormProvider>
  );
};
