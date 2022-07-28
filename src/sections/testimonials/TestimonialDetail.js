// @mui
import { styled, useTheme } from '@mui/material/styles';
import { m } from 'framer-motion';
import { Box } from '@mui/system';
import { Divider, Typography,Paper } from '@mui/material';
import ReactPlayer  from 'react-player';
import Iconify from '../../components/Iconify';
import { varFade } from '../../components/animate';

// components

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    display:'flex',
    height:'100%',
    [theme.breakpoints.down('sm')]: {
       marginTop:theme.spacing(7)
    },
}));

const BoxStyle = styled(m.div)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
}))

const StyledPaper = styled(Paper)(({theme})=>({
    height: 100,
    width:100,
    borderRadius:100/2,
    position:'absolute',
    top:-60,
    right:'45%',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    zIndex:9,
    boxShadow: theme.customShadows.z12,
    [theme.breakpoints.down('sm')]: {
        right:'35%',    
    },
}))

// ----------------------------------------------------------------------

export default function TestimonialVideo({testimonial}) {
    const theme = useTheme();
  return (
    <RootStyle>
        <Paper sx={{display:'flex',padding:theme.spacing(3),position:'relative',flexDirection:'column'}}>
            <StyledPaper>
                <Typography variant='h2' >{testimonial.name.slice(0,1)}</Typography>
            </StyledPaper> 
            <BoxStyle sx={{marginTop:theme.spacing(5)}} variants={varFade().inUp} >
                <Typography variant='h4' color={theme.palette.primary.main} >{testimonial.name}</Typography>
                <Typography variant='body' color={theme.palette.grey[600]} >{testimonial.designation}</Typography>
            </BoxStyle >   
            <Box sx={{display:'flex',flexDirection:'column',paddingTop:theme.spacing(5)}}>
             <BoxStyle variants={varFade().inUp} >    
            <Iconify icon={'fontisto:quote-left'} sx={{ ml: 1, width: 35, height: 35 }}  />
            <Typography variant='h4' sx={{fontWeight:'400',textAlign:'center'}} >{testimonial.quotes}</Typography>
             </BoxStyle>   
            </Box>
        </Paper>
    </RootStyle>
  );
}
