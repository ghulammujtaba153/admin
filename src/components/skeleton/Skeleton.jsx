import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function SkeletonColor({width, height}) {
  return (
    <Box
      sx={{
        bgcolor: 'rgb(228, 235, 229)',
        p: 5,
        //width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.400' }}
        variant="rectangular"
        width={width}
        height={height}
      />
    </Box>
  );
}