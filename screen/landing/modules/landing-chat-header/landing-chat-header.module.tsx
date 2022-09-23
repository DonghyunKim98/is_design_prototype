import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Box, Button } from '@mui/material';
import { memo } from 'react';
import { useSetRecoilState } from 'recoil';

import { $chats } from '../../landing.state';

import { InitialChat } from '@/utils';

export const LandingChatHeaderModule = memo(() => {
  const setChats = useSetRecoilState($chats);

  const handleClickRestartButton = () => {
    setChats([InitialChat]);
  };

  return (
    <Box className="flex justify-end flex-initial p-2 bg-gray-400 rounded-tl-xl rounded-tr-xl">
      <Button
        variant="contained"
        color="info"
        startIcon={<RestartAltIcon style={{ color: 'white' }} />}
        onClick={handleClickRestartButton}
      >
        통합 챗봇 재시작
      </Button>
    </Box>
  );
});
