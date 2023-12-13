'use client'
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import waveup from "./../../assets/images/wave/wavealttop.svg";
import wavedown from "./../../assets/images/wave/WaveTopOther.svg";
import Tittle from "../shared/Tittle";
import ProjectCard from "./ProjectCard";

import petangel from '../../assets/images/projects/pet-angel.png'
let petangelpoint=[
  'Multiple filtered implementation by category ,added date, and Search feature',
'Payment Integration with Stripe',
'Implement authentication and authorization for JWT token for different roles like admin and user'
]


const Projects = () => {
    return (
      <div  id='projects' >

     
      <Grid className="tail-relative ">
      <Image
        className="tail-min-w-full tail-z-[-30]"
        min-width={"100%"}
        alt="--"
        src={waveup}
        style={{ top: 0, position: "absolute" }}
      />
      <Image
        className="tail-min-w-full  tail-z-[-30]"
        min-width={"100%"}
        alt="--"
        src={wavedown}
        style={{ bottom: 0, position: "absolute" }}
      />

<Container className="tail-min-h-screen">
<Tittle tittle='Projects'>

</Tittle>

<Grid container justifyContent='center' className=" tail-py-24" gap={4}>
<Grid item xs={12} sx={{display:'flex', justifyContent:'center'}} >

<ProjectCard tittle='Pet Angel' image={petangel} details='Pet Adoption & donation Site' points={petangelpoint} live='https://pet-angel-react.web.app/' client='https://github.com/jhriyaz/pet-angel-client' server='https://github.com/jhriyaz/pet-angel-backend' > </ProjectCard>

</Grid>
<Grid item xs={12} >
<Grid container  justifyContent='space-between' >
<Grid item xs={11} md={5.5} >
<ProjectCard tittle='Pet Angel' image={petangel} details='Pet Adoption & donation Site' points={petangelpoint} live='https://pet-angel-react.web.app/' client='https://github.com/jhriyaz/pet-angel-client' server='https://github.com/jhriyaz/pet-angel-backend' > </ProjectCard>

</Grid>
<Grid item xs={11} md={5.5} >
<ProjectCard tittle='Pet Angel' image={petangel} details='Pet Adoption & donation Site' points={petangelpoint} live='https://pet-angel-react.web.app/' client='https://github.com/jhriyaz/pet-angel-client' server='https://github.com/jhriyaz/pet-angel-backend' > </ProjectCard>

</Grid>
</Grid>

</Grid>
</Grid>


</Container>

      </Grid>
      </div>
    );
};

export default Projects;