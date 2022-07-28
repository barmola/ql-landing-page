import { useNavigate } from 'react-router';
import { m ,AnimatePresence} from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography } from '@mui/material';
import { PATH_PAGE } from '../../routes/paths';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

const ScreenStyle = styled(m.div)(({ theme }) => ({
    paddingRight: 2,
    paddingBottom: 1,
    maxWidth: 160,
    borderRadius: 8,
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
    [theme.breakpoints.up('sm')]: {
      maxWidth: 320,
      paddingRight: 4,
      borderRadius: 12,
    },
    '& img': {
      borderRadius: 8,
      [theme.breakpoints.up('sm')]: {
        borderRadius: 12,
      },
    },
  }));



  const COMMON = {
    scaleX: 0.86,
    skewY: 8,
    skewX: 0,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    opacity: 0,
  };
  
  const variantScreenLeft = {
    initial: COMMON,
    animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 },
   exit:varFade().outDown.exit
  };
  const variantScreenCenter = {
    initial: COMMON,
    animate: { ...COMMON, opacity: 1 },
    exit:varFade().outRight.exit
  };
  const variantScreenRight = {
    initial: COMMON,
    animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 },
    exit:varFade().outUp.exit
  };





  export default function HomeProjects(){
    const theme = useTheme();
    const navigate = useNavigate()
    const isLight = theme.palette.mode === 'light';
  
    const isRTL = theme.direction === 'rtl';
  
    const screenLeftAnimate = variantScreenLeft;
  
    const screenCenterAnimate = variantScreenCenter;
  
    const screenRightAnimate = variantScreenRight;

    return (
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
      }}
      >
              {[...Array(3)].map((_, index) => (
              <AnimatePresence>
                <ScreenStyle
                  key={`${index}-fm`}
                  variants={{
                    ...(index === 0 && screenLeftAnimate),
                    ...(index === 1 && screenCenterAnimate),
                    ...(index === 2 && screenRightAnimate),
                    
                  }}
                  transition={{ duration: 0.72, ease: 'easeOut' }}
                  sx={{
                    boxShadow: `${isRTL ? -80 : 80}px -40px 80px ${alpha(
                      isLight ? theme.palette.grey[600] : theme.palette.common.black,
                      0.48
                    )}`,
                    ...(index === 0 && {
                      zIndex: 3,
                      position: 'absolute',
                    }),
                    ...(index === 1 && { zIndex: 2 }),
                    ...(index === 2 && {
                      zIndex: 1,
                      position: 'absolute',
                      boxShadow: 'none',
                    }),
                  }}
                >
                  <Image
                    disabledEffect
                    alt={`screen ${index + 1}`}
                    src={`/assets/icons/IMG_${index+1}.png`}
                    sx={{height:500}}
                    // ratio='4/3'
                    // src={`https://minimal-assets-api-dev.vercel.app/assets/images/home/screen_${
                    //   !isLight ? 'light' : 'dark'
                    // }_${index + 1}.png`}
                  />
                </ScreenStyle>
              </AnimatePresence>
              ))}
              <Box
              sx={{
                position:'absolute',
                bottom:-100,
                zIndex:999
              }}
              >
              <Button onClick={()=>navigate(PATH_PAGE.ourWork)} >Show More</Button>
              </Box>
            </Box>
    )

  }