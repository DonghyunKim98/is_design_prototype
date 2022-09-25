import dayjs from 'dayjs';

import { Chat } from '@/screen';

export const InitialChat: Chat = {
  timestamp: dayjs(),
  message: `안녕하세요. 통합 챗봇입니다.
  
  생활·법률등 행정업무 4개 분야에 대한 상담을 제공합니다.
  
  아래의 분야별 버튼을 누르시거나, 대화창에 궁금한 내용을 질문해 주세요.
  궁금한 내용과 가장 관련있는 챗봇이 대답해줄 거에요!`,
  buttons: ['생활·법률', '전자·통관', '공무원연금', '교통·환경'],
  host: 'BOT',
};
