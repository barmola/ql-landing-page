import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Link, Paper, Rating, Container, Typography,Stack, Avatar } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// components
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    name: 'Bessie Cooper',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `Amazing Experience, Qilin Lab helped our business to stay ahead in everchanging technology`,
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  marginTop: theme.spacing(5),
  backgroundSize: 'cover',
  borderRadius:theme.shape.borderRadius,
  backgroundImage: `linear-gradient(to right, ${alpha(theme.palette.grey[900], 1)} , ${alpha(
    theme.palette.grey[900],
    1
  )}), url(https://minimal-assets-api-dev.vercel.app/assets/images/about/testimonials.jpg)`,
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    padding: 0,
    height: 840,
    overflow: 'hidden',
  },
}));

// ----------------------------------------------------------------------

export default function HomeTestimonials() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ position: 'relative',width:350 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'center',sm:'center' }}
        //   sx={{width:300 }}
        >
       
            {TESTIMONIALS.map((testimonial) => (
                  <m.div key={testimonial.name} variants={varFade().inUp}>
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
        </Grid>

        {isDesktop && (
          <Box sx={{py:2}}>
            <m.div variants={varFade().inLeft}>
              <TestimonialLink />
            </m.div>
          </Box>
        )}
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

function TestimonialLink() {
  return (
    <Link href="#" variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}>
      Read more testimonials
      <Iconify icon={'ic:round-arrow-right-alt'} sx={{ ml: 1, width: 20, height: 20 }} />
    </Link>
  );
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    content: PropTypes.string,
    dateCreate: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
  }),
};

function TestimonialCard({ testimonial }) {
  const theme = useTheme();

  const { name, rating, dateCreate, content } = testimonial;

  return (
    <Paper
      sx={{
        mt: 3,
        p: 3,
        // width:350,
        color: 'common.white',
        ...cssStyles().bgBlur({
          color: theme.palette.common.white,
          opacity: 0.09,
        }),
      }}
    >
      <Iconify icon={'fa-solid:quote-left'} sx={{ ml: 1, width: 45, height: 45 }}  />
     
      <Typography variant="h4" sx={{ mt: 1.5 }}>
        {content}
      </Typography>
      <Stack sx={{pt:3,alignItems:'center'}} direction='row' spacing={2}>
       <Avatar>B</Avatar> 
      <Typography variant="body2" gutterBottom>
        {name}
      </Typography>
      </Stack>
    
    </Paper>
  );
}
