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
        <Box className="flex flex-col flex-none w-full h-full bg-gray-100 md:w-3/4 md:h-5/6 md:aspect-5/9 lg:w-96 lg:h-auto lg:aspect-5/9">
          <LandingChatHeaderModule />
          <LandingChatBubblesModule />
          <LandingTextFieldModule />
        </Box>
      </Box>
      <LandingAddBotResponseModule />
    </FormProvider>
  );
};
