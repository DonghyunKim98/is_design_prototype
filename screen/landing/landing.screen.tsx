import { Box } from '@mui/material';
import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { useDidMount } from 'rooks';

import { $chats } from './landing.state';
import { ChatForm } from './landing.type';
import {
  LandingAddBotResponseModule,
  LandingChatBubblesModule,
  LandingChatHeaderModule,
  LandingTextFieldModule,
} from './modules';

import { InitialChat } from '@/utils';

export const LandingScreen: NextPage = () => {
  const setChats = useSetRecoilState($chats);

  const methods = useForm<ChatForm>({
    defaultValues: undefined,
  });

  useDidMount(() => {
    setChats([InitialChat]);
  });

  return (
    <FormProvider {...methods}>
      <Box className="flex items-center justify-center w-screen h-screen gap-4">
        <Box className="flex flex-col flex-none bg-gray-100 w-96 aspect-5/8">
          <LandingChatHeaderModule />
          <LandingChatBubblesModule />
          <LandingTextFieldModule />
        </Box>
      </Box>
      <LandingAddBotResponseModule />
    </FormProvider>
  );
};
