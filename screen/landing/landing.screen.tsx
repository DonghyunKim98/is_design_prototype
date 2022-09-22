import { Box } from '@mui/material';
import dayjs from 'dayjs';
import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { useDidMount } from 'rooks';

import { $chats } from './landing.state';
import { ChatForm } from './landing.type';
import {
  LandingAddBotResponseModule,
  LandingChatBubblesModule,
  LandingTextFieldModule,
} from './modules';

export const LandingScreen: NextPage = () => {
  const setChats = useSetRecoilState($chats);

  const methods = useForm<ChatForm>({
    defaultValues: undefined,
  });

  useDidMount(() => {
    setChats([
      {
        timestamp: dayjs(),
        message: '최초 봇의 메세지입니다',
        buttons: ['생활·법률', '범죄·수사', '복지·지원', '교통·환경'],
        host: 'BOT',
      },
    ]);
  });

  return (
    <FormProvider {...methods}>
      <Box className="flex items-center justify-center w-screen h-screen gap-4">
        <Box className="flex flex-col flex-none bg-gray-100 w-96 aspect-5/8">
          <LandingChatBubblesModule />
          <LandingTextFieldModule />
        </Box>
      </Box>
      <LandingAddBotResponseModule />
    </FormProvider>
  );
};
