import { Box } from '@mui/material';
import { NextPage } from 'next';

export const LandingScreen: NextPage = () => {
  return (
    <Box typography="h2" className="flex flex-row items-center justify-center w-full">
      <Box className="self-center bg-gray-200 w-60">정보시스템 설계</Box>
    </Box>
  );
};
