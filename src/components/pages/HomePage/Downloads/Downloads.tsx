import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import ChartIcon from 'src/assets/Chart.svg?react';
import appColors from 'src/styles/colors';
import { npmApi } from 'src/api/configs';
import { text } from 'src/configs/configs';
import Count from './Count';

export default function Downloads() {
  return (
    <Box
      sx={{
        padding: '16px',
        flex: 1,
      }}
    >
      <Box
        sx={{
          marginBottom: '16px',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <ChartIcon style={{ color: 'currentColor', height: 18 }} />
        <Typography>{text.byTheNumbers}</Typography>
      </Box>
      <Divider
        sx={{
          borderColor: appColors.c20,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          flexDirection: 'column',
          marginTop: '16px',
        }}
      >
        <Count url={npmApi.allPackagesLastDayDownloadsUrl} text={text.downloadsLastDay} />
        <Count url={npmApi.allPackagesLastWeekDownloadsUrl} text={text.downloadsLastWeek} />
        <Count url={npmApi.allPackagesLastMonthDownloadsUrl} text={text.downloadsLastMonth} />
      </Box>
    </Box>
  );
}
