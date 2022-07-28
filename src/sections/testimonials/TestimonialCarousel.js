import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ReactPlayer  from 'react-player';
import { m } from 'framer-motion';
import { useState, useRef } from 'react';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { CardContent, Box, Card, Typography, Link, Paper, CardMedia, Tooltip } from '@mui/material';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';

import { MotionContainer, varFade,IconButtonAnimate } from '../../components/animate';
import { CarouselDots, CarouselArrows } from '../../components/carousel';

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


const BoxContent = styled(Box)(({theme})=>({
  marginTop:theme.spacing(4),
  // maxWidth:680,
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(8),
  },

}))

// ----------------------------------------------------------------------

TestimonialCarousel.propTypes = {
  list: PropTypes.array.isRequired,
  setIndex: PropTypes.func
};

export default function TestimonialCarousel({ list,setIndex, ...other }) {
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    // ...CarouselDots({
    //   zIndex: 9,
    //   top: 24,
    //   left: 24,
    //   position: 'absolute',
    // }),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    // <Card {...other}>
    <BoxContent>
    <Slider ref={carouselRef} {...settings}>
        {list.map((app, index) => (
          <CarouselItem key={index} item={app} isActive={index === currentIndex} index={index} setIndex={setIndex} />
        ))}
      </Slider>
    </BoxContent>
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

function CarouselItem({ item, isActive,index,setIndex }) {
  const { name,thumbnail,designation } = item;
  const theme = useTheme();
    console.log('Item :',item)
  return (
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
        component="img"
        height="140"
        image={thumbnail}
        alt={name}
      />
      <CardContent>
        <Box
        sx={{
          display:'grid',
          gap:1,
          gridTemplateColumns: '1fr 4fr',
        }}
        >
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >

      <Tooltip title="Play Testimonial" placement="left">
        <IconButtonAnimate
          color="inherit"
          onClick={()=>setIndex(index)}
          sx={{
            p: 1.25,
            transition: (theme) => theme.transitions.create('all'),
            '&:hover': {
              color: 'primary.main',
              bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
            },
          }}
        >
          <Iconify icon={'bi:play-circle-fill'} width={30} height={30} />
        </IconButtonAnimate>
      </Tooltip>
          </Box>
          <Box>
          <Typography gutterBottom variant="h5" component="div">{name}</Typography>
        <Typography gutterBottom variant="body" component="div">{designation}</Typography>
          </Box>
        </Box>
      
      </CardContent>
        </Card>
  );
}
