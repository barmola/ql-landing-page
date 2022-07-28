import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect'

// @mui
import { styled,useTheme } from '@mui/material/styles';
import { Button, Box, Container, Typography, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade,MotionContainer } from '../../components/animate';


const ContentCard = styled(Card)(({ theme }) => ({
      '&:hover':{
        cursor:'pointer'
      }
}));


OurWorkProjectCard.propTypes={
    heading:PropTypes.string,
    description:PropTypes.string,
    onPress:PropTypes.func,
    image: PropTypes.string
}



export default function OurWorkProjectCard({heading,description,image,onPress}){
    console.log('Heading:',heading)
    const theme = useTheme();
    return(
      <ContentCard sx={{ maxWidth: 345 }} onClick={()=>onPress()} >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent 
      
      >
          {/* <m.div variants={varFade().inRight} > */}
        <Typography gutterBottom variant="h5" component="div" >
        {heading}
        </Typography>
        {/* </m.div> */}
        {/* <m.div variants={varFade().inRight}> */}
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {/* </m.div> */}
      </CardContent>
      {/* {onPress && <CardActions>
        <Button onClick={()=>onPress()}  size="small">Show Projects</Button>
      </CardActions>} */}
    </ContentCard>
    )
}