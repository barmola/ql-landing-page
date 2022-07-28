import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { m } from 'framer-motion';
import { useState, useRef } from 'react';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { CardContent, Box, Card, Typography, Link } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionContainer, varFade } from '../../components/animate';
import { CarouselDots, CarouselArrows } from '../../components/carousel';
import OurWorkProjectCard from './OurWorkProjectCard';

// ----------------------------------------------------------------------

const OverlayStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  position: 'absolute',
  backgroundColor: alpha(theme.palette.grey[900], 0.64),
}));

// ----------------------------------------------------------------------

OurWorkCarousel.propTypes = {
  list: PropTypes.array.isRequired,
};

export default function OurWorkCarousel({ list, ...other }) {
  const theme = useTheme();

  const carouselRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? list.length - 1 : 0);

  const settings = {
    speed: 800,
    dots: true,
    arrows: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setCurrentIndex(next),
    ...CarouselDots({
      zIndex: 9,
      top: 24,
      left: 24,
      position: 'absolute',
    }),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    // <Card {...other}>
      <Slider ref={carouselRef} {...settings}>
        {list.map((app, index) => (
           <OurWorkProjectCard heading={app.name} description={app.description} image={app.image} key={app.id} /> 
        //   <CarouselItem key={app.id} item={app} isActive={index === currentIndex} />
        ))}
      </Slider>

  );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  isActive: PropTypes.bool,
  item: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }),
};

function CarouselItem({ item, isActive }) {
  const { image, name, description } = item;
    console.log('Item :',item)
  return (
    <Box sx={{ position: 'relative' }}>
      <CardContent
        component={MotionContainer}
        animate={isActive}
        action
        sx={{
          width: 1,
          zIndex: 99,
          bottom: 0,
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <m.div variants={varFade().inRight}>
          <Typography variant="overline" component="div" sx={{ mb: 1, opacity: 0.48 }}>
            Featured App
          </Typography>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Link color="inherit" underline="none">
            <Typography variant="h5" gutterBottom noWrap>
              {name}
            </Typography>
          </Link>
        </m.div>

        <m.div variants={varFade().inRight}>
          <Typography variant="body2" noWrap>
            {description}
          </Typography>
        </m.div>
      </CardContent>

      <OverlayStyle />

      <Image alt={name} src={image} sx={{ height: { xs: 280, xl: 320 } }} />
    </Box>
  );
}
