import { useState } from 'react';
import { m } from 'framer-motion';
import Typewriter from 'typewriter-effect'

// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Button, Box, Container, Typography, Stack, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';
import OurWorkProjectCard from './OurWorkProjectCard';
import OurWorkCarousel from './OurWorkCarousel';
import OurWorkProjectDetail from './OurWorkProjectDetail';



const CRYPTO_PROJECTS = [
    { id: 1, 
        title: 'Spend The Bits', 
        address:'Spend The Bits Inc., Edmonton, Canada',
        heading:'Spend The Bits is a popular crypto wallet and payments solution powered by the XRP Ledger.',
        description: `Spend The Bits aims to enable buying coffee using crypto and share crypto to your friends and family across the globe in a jiffy!`, 
        image: '/assets/all-index-screenshot.png',
        technology:[
            {
                name:'AWS',
                icon:'/assets/icons/aws.png'
            },
            {
                name:'Django',
                icon:'/assets/icons/django.png'
            },
            {
                name:'React JS',
                icon:'/assets/icons/react.png'
            },
            {
                name:'React Native',
                icon:'/assets/icons/react.png'
            },
        ] 
      },
]


const WEB_PROJECTS = [
    { id: 1, 
      title: 'Allindex', 
      address:'Allindex SA, Switzerland',
      heading:'Customised portfolios of stocks around the world.',
      description: `Allindex is a Swiss company who have a vision of creating the next big Smallcase product where user can invest in customised portfolios across sectors, geography , and industries .`, 
      image: '/assets/all-index-screenshot.png',
      technology:[
          {
              name:'AWS',
              icon:'/assets/icons/aws.png'
          },
          {
              name:'Django',
              icon:'/assets/icons/django.png'
          },
          {
              name:'React JS',
              icon:'/assets/icons/react.png'
          },
          {
              name:'React Native',
              icon:'/assets/icons/react.png'
          },
      ] 
    },
   

]





const ContentStyle = styled('div')(({ theme }) => ({
    // padding:theme.spacing(10),
    // marginTop:theme.spacing(10),
    // display:'flex',
    justifyContent: 'center',
    // width:'100%',
    // position:'relative',
    // height:'100%'

}));







export default function OurWorkHeading() {
    const theme = useTheme();
    const [currentView, setCurrentView] = useState('idle')

    function renderSliders() {
        switch (currentView) {
            case 'crypto':
                return (
                    <Stack direction='row' sx={{ justifyContent: 'center' }} spacing={2} >
                        {CRYPTO_PROJECTS.map((item, index) => (
                            <OurWorkProjectDetail
                            key={`${item.title}-project`}
                            title={item.title}
                            address={item.address}
                            heading={item.heading}
                            description={item.description}
                            technology={item.technology}
                            image={item.image}
                            /> 
                        ))}
                    </Stack>
                );

            case 'mobile':
                return (
                    <Stack>
                        {WEB_PROJECTS.map((item,index)=>(
                            <OurWorkProjectDetail
                            key={`${item.title}-project`}
                            title={item.title}
                            address={item.address}
                            heading={item.heading}
                            description={item.description}
                            technology={item.technology}
                            image={item.image}
                            />
                        ))
                        }
                    </Stack>
                );
            default:
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} >
                            <Stack direction='row' sx={{ justifyContent: 'center' }}>
                                <OurWorkProjectCard
                                    heading='Crypto & Blockchain'
                                    description='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
                                    image="/assets/icons/crypto.jpg"
                                    onPress={() => setCurrentView('crypto')}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Stack direction='row' sx={{ justifyContent: 'center' }} spacing={2}>
                                <OurWorkProjectCard
                                    heading='Mobile & Web Development'
                                    description='Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
                                    image="/assets/icons/web-development.jpg"
                                    onPress={() => setCurrentView('mobile')}
                                />
                            </Stack>
                        </Grid>

                    </Grid>

                )
        }
    }
    return (
        <Container component={MotionViewport} >
            <ContentStyle>
                {renderSliders()}
                {currentView !== 'idle' &&
                    <Stack sx={{ justifyContent: 'center', alignItems: 'center', mt: 3 }} >
                        <Button variant='primary' onClick={() => setCurrentView('idle')} >Back</Button>
                    </Stack>}
            </ContentStyle>
        </Container>
    )
}