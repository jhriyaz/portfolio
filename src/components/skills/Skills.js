"use client";
import { Container, Grid } from "@mui/material";
import Tittle from "../shared/Tittle";
import waveup from "./../../assets/images/wave/wavealttop.svg";
import wavedown from "./../../assets/images/wave/WaveTopOther.svg";
import Image from "next/image";

const Skills = () => {
    return (
        <Grid className="tail-relative">
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
       
        <Tittle tittle="My Skills" ></Tittle>
      
        </Container>

    
       </Grid>
    );
};

export default Skills;