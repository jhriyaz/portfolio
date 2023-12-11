'use client'
import { TypeAnimation } from 'react-type-animation';
import   './styles/style.css'
const { Grid, Container, Typography, Box, Button } = require("@mui/material");
import PortraitIcon from '@mui/icons-material/Portrait';
import InfoIcon from '@mui/icons-material/Info';
const Banner = () => {
  return (
 <Grid className="bannerSection">
    <Container>
        <Grid container>

<Grid item xs={12} sm={12} md={6} lg={6} sx={{whiteSpace:'pretty'}} >
<Typography variant="h3" color="secondary">
  Hello !👋

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
  <PortraitIcon></PortraitIcon> Resume
   </Button>
</Grid>
</Grid>
<Grid item xs={12} sm={12} md={6} lg={6}>

</Grid>
        </Grid>
      </Container>
 </Grid>
  );
};

export default Banner;
