import { m } from 'framer-motion';
import Typewriter from 'typewriter-effect'

// @mui
import { styled,useTheme } from '@mui/material/styles';
import { Button, Box, Container, Typography, Stack } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';


const ContentStyle = styled('div')(({ theme }) => ({
    padding:theme.spacing(10),
    marginTop:theme.spacing(10),
    [theme.breakpoints.down('sm')]:{
        padding: theme.spacing(4),
        
    }
}));




export default function OurWorkHeading(){
    const theme = useTheme();
    return(
        <Container component={MotionViewport} >
            <ContentStyle>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} >
                    <m.div variants={varFade().inUp } >
                    <Typography variant='h5' color={theme.palette.grey[600]}  alignItems='center' sx={{textAlign:'center',fontSize: theme.typography.pxToRem(16)}}  component='p'  >Qilin Lab will make your product look modern and professional while saving you precious time.</Typography>
                    </m.div>
                    <m.div variants={varFade().inUp}>
                    <Stack direction='row' spacing={2} sx={{py:2}} >
                    {/* <Typography variant='h2' >We </Typography> */}
                    <Typography variant='h2' sx={{textAlign:'center'}} >
                    <Typewriter
                options={{loop:true}}
                onInit={(typewriter)=>{
                  typewriter
                  .typeString('We create Crypto Currency app')
                  .pauseFor(1500)
                  .deleteAll()
                  .pauseFor(500)
                  .callFunction(()=>{})
                  .typeString('We do Mobile & Web Development')
                  .pauseFor(1500)
                  .start()
                  .callFunction(()=>{})
                }}
                />
                    </Typography>
                    </Stack>
                    </m.div>                  
                </Box>
            </ContentStyle>
        </Container>
    )
}