"use client";
import { Container, Divider, Grid } from "@mui/material";
import Tittle from "../shared/Tittle";
import waveup from "./../../assets/images/wave/wavealtdown.svg";
import wavedown from "./../../assets/images/wave/waveTop.svg";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import html from "./../../assets/images/skills/html.png"
import css from "./../../assets/images/skills/css.png"
import js from "./../../assets/images/skills/js.png"
import tailwind from "./../../assets/images/skills/tailwind.png"
import mui from "./../../assets/images/skills/mui.png"
import node from "./../../assets/images/skills/node.png"
import mdb from "./../../assets/images/skills/mdb.png"
import mongoose from "./../../assets/images/skills/mongoose.png"
import express from "./../../assets/images/skills/express.png"
import react from "./../../assets/images/skills/react.png"
import firebase from "./../../assets/images/skills/firebase.png"
import next from "./../../assets/images/skills/next.png"

const Skills = () => {
    return (
        <Grid className="tail-relative tail-pt-10 tail-pb-10" id='skills'>
          <p id="about"></p>
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
     

        <Container className="tail-min-h-screen  tail-p-4">
     
        <Tittle tittle="My Skills" ></Tittle>
        <Divider variant="middle"  className=" tail-my-3"/>
     <Grid container className=" tail-pt-24 tail-justify-between">
<Grid item lg={3.5} md={5} sm={11} xs={11}>
<ProgressBar tittle='HTML' image={html}  percentage={95}></ProgressBar>
</Grid>
<Grid item lg={4} md={6} sm={11} xs={11}className="lg:tail-mx-4 lg:tail-mt-5">
<ProgressBar tittle='CSS' image={css}  percentage={90}></ProgressBar>
</Grid>
<Grid item lg={3.5} md={5} sm={11} xs={11}>
<ProgressBar tittle='JAVASCRIPT' image={js}  percentage={80}></ProgressBar>
</Grid>
</Grid>

<Grid container className=" tail-pt-4 tail-justify-between">

<Grid item lg={3.5} md={5} sm={11} xs={11} className=" lg:tail-mt-5">
<ProgressBar tittle='TailWind' image={tailwind}  percentage={100}></ProgressBar>
</Grid>
<Grid item lg={4} md={6} sm={11} xs={11} className="lg:tail-mx-4 lg:tail-mb-[-4]">
<ProgressBar tittle='React' image={react}  percentage={85}></ProgressBar>
</Grid>
<Grid item lg={3.5} md={5} sm={11} xs={11} className=" lg:tail-mt-5">
<ProgressBar tittle='NODE' image={node}  percentage={60}></ProgressBar>
</Grid>



<Grid container className=" tail-pt-4 tail-justify-between">
</Grid>
<Grid item lg={3.5} md={5} sm={11} xs={11}>
<ProgressBar tittle='FIREBASE' image={firebase}  percentage={95}></ProgressBar>
</Grid>
<Grid item lg={4} md={6} sm={11} xs={11} className="lg:tail-mx-4 lg:tail-mt-5">
<ProgressBar tittle='Mongo DB' image={mdb}  percentage={80}></ProgressBar>
</Grid>
<Grid item lg={3.5} md={5} sm={11} xs={11}>
<ProgressBar tittle='Mongoose' image={mongoose}  percentage={65}></ProgressBar>
</Grid>
</Grid>
<Grid container className=" tail-pt-4 tail-justify-between">
<Grid item lg={3.5} md={5} sm={11} xs={11} className=" lg:tail-mt-5">
<ProgressBar tittle='Express' image={express}  percentage={60}></ProgressBar>
</Grid>
<Grid item lg={4} md={6} sm={11} xs={11} className="lg:tail-mx-4 ">
<ProgressBar tittle='Material UI' image={mui}  percentage={50}></ProgressBar>
</Grid>
<Grid item lg={3.5} md={6} sm={11} xs={11} className=" lg:tail-mt-5">
<ProgressBar tittle='Next' image={next}  percentage={25}></ProgressBar>
</Grid>
</Grid>
        </Container>

    
       </Grid>
    );
};

export default Skills;