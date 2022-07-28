// @mui
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Divider, Grid, Typography } from '@mui/material';
import {TestimonialVideo,TestimonialDetail, TestimonialCarousel} from '../sections/testimonials';
// components
import Page from '../components/Page';


const TESTIMONIALS=[
  {
    name:'Abhishek',
    designation:'CEO, OpenDoor Education',
    quotes:'Our experience has been beyond our expectations. Whatever products the company will build are going to be high quality',
    video:'https://youtu.be/jbbO3FiQfOg',
    thumbnail:'/assets/icons/abhishek-testimonial-thumbnail.jpg'
  },
  {
    name:'Jaskaran Singh',
    designation:'CEO, Spend The Bits',
    quotes:'Qilin Lab has helped us to streamline our internal IT process. A great addition to our team.',
    video:'https://youtu.be/gpb6mvrJdNA',
    thumbnail:'/assets/icons/jaskaran-testimonial-thumbnail.jpg',
  },
  {
    name:'Abhishek',
    designation:'CEO, OpenDoor Education',
    quotes:'Our experience has been beyond our expectations. Whatever products the company will build are going to be high quality',
    video:'https://youtu.be/jbbO3FiQfOg',
    thumbnail:'/assets/icons/abhishek-testimonial-thumbnail.jpg'
  },
  {
    name:'Jaskaran Singh',
    designation:'CEO, Spend The Bits',
    quotes:'Qilin Lab has helped us to streamline our internal IT process. A great addition to our team.',
    video:'https://youtu.be/gpb6mvrJdNA',
    thumbnail:'/assets/icons/jaskaran-testimonial-thumbnail.jpg',
  },
]

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(10),
  padding:theme.spacing(10),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(11),
    padding:theme.spacing(3)
  },
}));

// ----------------------------------------------------------------------

export default function Testimonials() {
  const [currentIndex,setIndex] = useState(0)
  return (
    <Page title="Testimonials">
      <RootStyle>
        <Grid container spacing={2} >
          <Grid item xs={12} md={5} >
            <TestimonialVideo video={TESTIMONIALS[currentIndex].video} />
          </Grid>
          <Grid item xs={12} md={7}>
            <TestimonialDetail testimonial={TESTIMONIALS[currentIndex]} />
          </Grid>
          <Grid item xs={12} md={12} >
            <TestimonialCarousel list={TESTIMONIALS} setIndex={setIndex} />
          </Grid>
        </Grid>
      </RootStyle>
    </Page>
  );
}
