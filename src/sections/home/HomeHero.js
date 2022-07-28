import { useState } from 'react';
import { m , AnimatePresence} from 'framer-motion';
import Typewriter from 'typewriter-effect'
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, Grid } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';
import HomeProjects from './HomeProjects';
import HomeTestimonials from './HomeTestimonials';
import HomeSpeed from './HomeSpeed';


const CURRENT_VIEW={
    project:'project',
    testimonial:'testimonial',
    speed:'speed'
}

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[900],
  [theme.breakpoints.up('md')]: { 
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}));

const CustomStack = styled(m.div)(({theme})=>({
  top: 0,
  right: 0,
  bottom: 0,
  position: 'absolute',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(15),
  width: '50%',
  height:'100%',
  // backgroundColor:'red'
}))

const MainContainer = styled(m.div)(({theme})=>({
  maxWidth: 1200,
  margin: 'auto',
  paddingTop: theme.spacing(20),
  // display:'flex',
  // boxSizing:'border-box'
}))


// ----------------------------------------------------------------------

const ratio = '3/4'

export default function HomeHero() {
  const [currentView,setCurrentView] = useState(CURRENT_VIEW.project)


  function renderCurrentView(){
    switch(currentView){
      case CURRENT_VIEW.testimonial:
        return <HomeTestimonials/>
      case CURRENT_VIEW.speed:
        return(
          <>
            <HomeSpeed title='GT Matrix Score' total={91.3} image='/assets/icons/gtmetrix.svg' />
            <HomeSpeed title='Google PageSpeed Score' total={89} image='/assets/icons/google-pagespeed.svg' imageSx={{height:60,width:60}} />
            </>
        )
      default:
        return <HomeProjects/>
    }
  }
  
  return (
    // <MotionContainer>
    //   <RootStyle>
    //     <CustomStack>
    //         <AnimatePresence>
    //         {renderCurrentView()} 
    //         {/* <HomeTestimonials/> */}
    //         </AnimatePresence>    
    //     </CustomStack>
    //     <Container>
        
    //     </Container>
    //   </RootStyle>
    // </MotionContainer>
    <MotionContainer>
    <MainContainer>
      <Grid container>
        <Grid item xs={12} md={6} order={{xs:2,md:1}} >
        <ContentStyle>
            <m.div variants={varFade().inRight}>
            <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <Typography variant="h1" sx={{ color: 'common.white' }}>
              Real     
             </Typography>
             <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
              <Typewriter
                options={{loop:true}}
                onInit={(typewriter)=>{
                  typewriter
                  .typeString('Projects.')
                  .pauseFor(1500)
                  .deleteAll()
                  .pauseFor(500)
                  .callFunction(()=>setCurrentView(CURRENT_VIEW.testimonial))
                  .typeString('Testimonials.')
                  .pauseFor(1500)
                  .deleteAll()
                  .pauseFor(500)
                  .callFunction(()=>setCurrentView(CURRENT_VIEW.speed))
                  .typeString('Speed.')
                  .pauseFor(1500)
                  .start()
                  .callFunction(()=>setCurrentView(CURRENT_VIEW.project))
                }}
                />
              </Typography>
            </Stack>
            </m.div>
            <m.div variants={varFade().inRight}>
              <Typography sx={{ color: 'common.white' }}>
                The starting point for your next project based on easy-to-customize MUI helps you build apps faster and
                better.
              </Typography>
            </m.div>
            <m.div variants={varFade().inRight}>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_DASHBOARD.root}
                startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
              >
                Get Started
              </Button>
            </m.div>

            <Stack spacing={2.5}>
              <m.div variants={varFade().inRight}>
                <Typography variant="overline" sx={{ color: 'primary.light' }}>
                  Available For
                </Typography>
              </m.div>

              <Stack direction="row" spacing={3} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                {['aws','python','django','react','javascript'].map((resource) => (
                  <m.img
                    key={resource}
                    variants={varFade().inRight}
                    alt={resource}
                    src={`/assets/icons/${resource}.svg`}
                    style={{height:40}}
                  />
                ))}
              </Stack>
            </Stack>
          </ContentStyle>
        </Grid>
        <Grid item xs={12} md={6} order={{xs:1,md:2}} >
               <AnimatePresence>
           {renderCurrentView()} 
           </AnimatePresence>  
        </Grid>
      </Grid>
    </MainContainer>
    </MotionContainer>
  );
}
