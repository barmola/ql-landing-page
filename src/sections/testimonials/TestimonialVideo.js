// @mui
import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { Divider, Typography,Paper } from '@mui/material';
import ReactPlayer  from 'react-player';
// components

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({

}));

// ----------------------------------------------------------------------

export default function TestimonialVideo({video}) {
    const theme = useTheme();
  return (
    <RootStyle>
        <Paper sx={{display:'flex'}}>
            <ReactPlayer url={video} style={{borderRadius:theme.spacing(3)}} />
        </Paper>
    </RootStyle>
  );
}
