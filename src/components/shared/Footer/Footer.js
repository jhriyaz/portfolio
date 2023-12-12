
import { Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import waveup from "../../../assets/images/wave/wavealttop.svg";
import wavedown from "../../../assets/images/wave/WaveTopOther.svg";
import logo from "../../../assets/images/MJH.png";
import Image from "next/image";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
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
        <Container className=" tail-min-w-full  lg:tail-py-[122px] ">
<Image height={100} width={150} alt="Logo" src={logo} className="tail-flex tail-justify-center tail-mx-auto ">

</Image>
<Stack className="tail-flex tail-mx-auto tail-justify-center" direction="row" alignItems="center" spacing={1}>
<IconButton size="large">
        <GitHubIcon color="secondary"  fontSize="inherit"  className=" tail-text-[#ececed]"/>
      </IconButton>
      <IconButton size="large">
        <LinkedInIcon color="secondary"  fontSize="inherit"  className=" tail-text-[#ececed]"/>
      </IconButton>
      <IconButton size="large">
        <TwitterIcon color="secondary"  fontSize="inherit"  className=" tail-text-[#ececed]"/>
      </IconButton>
     
</Stack>

            <Typography color='gray' fontWeight='bold' textAlign='center'>
                Al Right Reserved by Md Jahid Hasan
            </Typography>
        </Container>
      </Grid>
    );
};

export default Footer;