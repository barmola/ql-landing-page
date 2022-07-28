import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
import { m } from 'framer-motion';

// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Typography, Stack, Container } from '@mui/material';
// utils
import { fNumber, fPercent } from '../../utils/formatNumber';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';
import { AppCurrentDownload } from '../@dashboard/general/app';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  width: 24,
  height: 24,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.success.main,
  backgroundColor: alpha(theme.palette.success.main, 0.16),
}));

// ----------------------------------------------------------------------

HomeSpeed.propTypes = {
  chartColor: PropTypes.string.isRequired,
  chartData: PropTypes.arrayOf(PropTypes.number).isRequired,
  percent: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
  image:PropTypes.string,
  imageSx: PropTypes.object
};

export default function HomeSpeed({ title, percent, total, chartColor, chartData, sx,image,imageSx, ...other }) {
  const theme = useTheme();


  return (
<m.div variants={varFade().inRight}>
  <Container
    sx={{justifyContent:'center',alignItems:'center',display:'flex',paddingTop:theme.spacing(10)}}
    >
   <Card sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx,width:350 }} {...other}>
      <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h1" color={theme.palette.success.main} >{fNumber(total)}%</Typography>
            <Typography variant="subtitle2">{title}</Typography>
      </Box>
       <Image src={image} sx={imageSx} />     
    </Card>
    </Container>  
    </m.div>  
  
 
  );
}
