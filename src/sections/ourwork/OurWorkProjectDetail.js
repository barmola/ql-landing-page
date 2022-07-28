import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect'

// @mui
import { styled,useTheme } from '@mui/material/styles';
import { Button, Box, Container, Typography, Stack, Chip, Avatar, DialogTitle, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade,MotionContainer } from '../../components/animate';


const ContentStyle = styled('div')(({ theme }) => ({
    // padding:theme.spacing(10),
    // marginTop:theme.spacing(10),
    // display:'flex',
    // justifyContent:'center',

}));


OurWorkProjectDetail.propTypes={
    onPress:PropTypes.func,
    image: PropTypes.string,
    title:PropTypes.string,
    address:PropTypes.string,
    heading:PropTypes.string,
    description:PropTypes.string,
    technology:PropTypes.arrayOf(PropTypes.shape({
        icon:PropTypes.string,
        name:PropTypes.string
    }))
}



export default function OurWorkProjectDetail({heading,description,image,onPress,title,address,technology}){
    console.log('Heading:',heading)
    const theme = useTheme();
    return(
    <Card sx={{ display: 'flex' }}>
        <Grid container >
          <Grid xs={12} md={2} >
          <CardMedia
        component="img"
        // sx={{ width: 151 }}
        image={image}
        alt={title}
      />
          </Grid>  
          <Grid xs={12} md={10} >
          <CardContent
        sx={{
            display: 'flex', flexDirection: 'column',
            justifyContent:'space-between',
            height:'100%'
          }}
        >
            <Box>
            <Typography variant='h4' color={theme.palette.primary.main} >{title}</Typography>
            <Typography variant='body' sx={{fontStyle:'italic'}} >{address}</Typography>
            <Box sx={{paddingTop:theme.spacing(2),flexWrap:'wrap',overflow:'hidden'}} >
              <Typography variant='h5' sx={{paddingBottom:theme.spacing(1)}} >{heading}</Typography>  
              <Typography variant='body' >{description}</Typography>  
            </Box> 
            </Box>
         
            <Box>
            <Typography variant='caption' sx={{fontWeight:'700'}} >Technology Used</Typography>
            <Stack direction='row' sx={{justifyContent:'space-between'}} spacing={2} >
            <Box direction='row' spacing={3} sx={{
                marginTop:theme.spacing(2),
                display:'grid',
                gap:1,
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' },
                }}>
                {technology.map((item,index)=>(
                    <Chip 
                avatar={<Avatar alt="Natacha" 
                src={item.icon} />}
                label={item.name}
                variant='outlined' 
                key={`${item.name}-${index}`}
                />
                ))

                }
            </Box>
            <Button>Read More</Button>
            </Stack>
           
            </Box>
        </CardContent>
        </Grid>  
        </Grid>
        
    </Card>
    )
}