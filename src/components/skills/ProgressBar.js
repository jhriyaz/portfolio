"use client";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



const ProgressBar = ({percentage,tittle,image}) => {
    return (


<Grid>
<Typography sx={{textAlign:'center'}} className=" tail-font-bold tail-text-[#222] tail-outline-2 tail-outline-white" variant="h6" color='secondary'>
        {tittle}
            </Typography> 
<Card sx={{ display: 'flex',padding:2,alignItems:'center',gap:4}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Grid  className="tail-grid tail-items-center">

<CircularProgressbar
counterClockwise={true}
  value={percentage}
  text ={percentage+'%'}
  styles={buildStyles({
      textColor: "#222",
      pathColor: "#034e78",
      trailColor: "#9C27B0",
      fontWeight:'bold'
    })}
/>

</Grid>
        
      </Box>
     <Image src={image} className=" tail-w-48" width={150} height={'100%'} alt='skill image'/>
    </Card>
</Grid>
  );
}





export default ProgressBar;