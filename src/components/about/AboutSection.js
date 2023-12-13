"use client";
import { Container, Grid, Paper, Typography } from "@mui/material";
import Tittle from "../shared/Tittle";
import waveup from "./../../assets/images/wave/wavealtdown.svg";
import wavedown from "./../../assets/images/wave/wavebottom.svg";
import aboutSection from "./../../assets/images/aboutSection.png";
import Image from "next/image";
const AboutSection = () => {
  return (
    <Grid className="tail-relative" id="about">
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
   
      <Container className="tail-min-h-screen tail-py-24">
      <Tittle tittle="About Me"></Tittle>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop:'100px'
          }}
        >
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <Image
              className=" tail-z-50 md:tail-pt-0"
              min-width={"100%"}
              alt="--"
              src={aboutSection}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12} className=" tail-text-xs tail-font-semibold" sx={{display:'grid',gap:3}}>
            <Paper className=" tail-shadow-xl" elevation={2} sx={{ padding:4 , background:'transparent',color:'#030303', textShadow:'-1px 1px black;'}}>
                
          <Typography variant='body1' >
{"Hey there! I'm Md Jahid Hasan, a passionate React developer who thrives on crafting efficient and user-friendly web applications. With a solid background in JavaScript, I've immersed myself in the React ecosystem, constantly honing my skills to stay at the forefront of this dynamic technology."}
</Typography>
<Typography variant='body1'>

{"My journey into the world of web development began with an insatiable curiosity for creating seamless digital experiences. Over time, I've gained extensive experience in building responsive and scalable front-end solutions using React, harnessing its power to bring ideas to life."}
</Typography>
<Typography variant='body1'>

{"I take pride in my ability to translate complex concepts into clean, maintainable code. Whether it's architecting a new feature, optimizing performance, or debugging intricate issues, I approach every challenge with enthusiasm and a problem-solving mindset."}
</Typography>
<Typography variant='body1'>

{"Collaboration is key in my workflow—I enjoy working alongside diverse teams, bouncing ideas off each other, and collectively pushing the boundaries of what we can achieve. I firmly believe that the best products emerge from collaboration, innovation, and attention to detail."}
</Typography>


          
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default AboutSection;
