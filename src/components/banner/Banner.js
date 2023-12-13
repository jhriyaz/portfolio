'use client'
import { TypeAnimation } from 'react-type-animation';
import   './styles/style.css'
const { Grid, Container, Typography, Box, Button } = require("@mui/material");
import PortraitIcon from '@mui/icons-material/Portrait';
import InfoIcon from '@mui/icons-material/Info';
import Image from 'next/image';

import profileImage from './../../assets/images/image.png'
import waveup from './../../assets/images/wave/wavealttop.svg'
import wavedown from './../../assets/images/wave/WaveTopOther.svg'
import Link from 'next/link';



const Banner = () => {

  return (
 <Grid className="bannerSection " style={{position:'relative'}}>
    <Image className='tail-min-w-full' min-width={'100%'} alt="--" src={waveup} style={{top:0,position:'absolute'}}/>
    <Image className='tail-min-w-full' width={'100%'} 	sizes="100vw" alt="--" src={wavedown} style={{bottom:0,position:'absolute'}} />
    <Container className=' tail-z-50 tail-py-10'>
        <Grid container gap={2}>

<Grid item xs={12} sm={12} md={7} lg={7} sx={{whiteSpace:'pretty'}} >
<Typography variant="h3" color="info">
  Hello !👋 
</Typography>
  <Typography variant="h5" color="info">
I am
  </Typography>
<Typography  variant="h3" color="secondary">
<Box className="stack" style={{'--stacks': '3'}}>
    <span style={{'--index': '0'}}>Md Jahid Hasan</span>
    <span style={{'--index': '1'}}>Md Jahid Hasan</span>
    <span style={{'--index': '2'}}>Md Jahid Hasan</span>
  </Box>
</Typography>
  
  

<Typography variant='body1' sx={{color:'#02273c',paddingY:2}}>
I.m  a dedicated React developer weaving digital experiences with innovation. Dive into my portfolio and explore the projects that define my journey in crafting intuitive and dynamic web solutions using ReactJS. Welcome to my world of code !

</Typography>

<Grid sx={{display:'flex',gap:2,paddingTop:2}}>
<Button variant='contained' color='secondary' sx={{display:'flex',alignItems:'center',justifyContent: 'center', paddingY:1,gap:1}}>
<InfoIcon></InfoIcon> About
   </Button>
   <Button variant='contained' color='info'  sx={{display:'flex',alignItems:'center', paddingY:1,gap:1}}>
   <Link href='https://drive.google.com/uc?id=1lsxRQE93qPDrLS3qBlKg877wynNZV3MY&export=download' download>
   <PortraitIcon></PortraitIcon>  Resume
           </Link>
   </Button>
</Grid>
</Grid>
<Grid item xs={12} sm={12} md={4} lg={4} sx={{display:'grid',alignItems:'center',justifyContent: 'center'}}>

<Box className="stack" style={{'--stacks': '3'}}>
    <span style={{'--index': '0'}}> <Image style={{borderRadius:'300px',border:'4px solid #222', padding:2,background:'#034e78'}} height={300} width={300} alt='Profile Image' src={profileImage}/></span>
    <span style={{'--index': '1'}}> <Image style={{borderRadius:'300px',border:'4px solid #222', padding:2,background:'#034e78'}} height={300} width={300} alt='Profile Image' src={profileImage}/></span>
    <span style={{'--index': '2'}}> <Image style={{borderRadius:'300px',border:'4px solid #222', padding:2,background:'#034e78'}} height={300} width={300} alt='Profile Image' src={profileImage}/></span>
  </Box>
  <Typography  variant="h6" sx={{textAlign:'center',paddingTop:2,color:'#034e78'}}>
<Box className="stack" style={{'--stacks': '3'}}>
    <span style={{'--index': '0'}}>MERN Stack Developer</span>
    <span style={{'--index': '1'}}>MERN Stack Developer</span>
    <span style={{'--index': '2'}}>MERN Stack Developer</span>
  </Box>
</Typography>
</Grid>
        </Grid>
      </Container>
 </Grid>
  );
};

export default Banner;
