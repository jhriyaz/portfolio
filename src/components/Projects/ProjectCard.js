'use client'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { ButtonGroup, Grid, ListItem, ListItemText } from '@mui/material';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import Link from 'next/link';
import SettingsIcon from '@mui/icons-material/Settings';
const ProjectCard = ({image,tittle,details,points,live,client,server}) => {
    return (
        <Card sx={{ width:'100%',padding:4}}>
       <Image src={image} height={'100%'} width={'100%'} alt='Project image'/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tittle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details}
          </Typography>
<Grid className="tail-grid tail-gap-3 tail-pt-5">
{points.map(point =><ListItem key={point} component="div" disablePadding>
{<SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>}
     <ListItemText primary={` ${point}`} />
    </ListItem>)}
</Grid>

        </CardContent>
        <CardActions className="tail-grid tail-gap-4">
            <Grid sx={{fontWeight:700}}>
                <SettingsIcon></SettingsIcon>Technology{' ::'}
               <ButtonGroup className="tail-pl-3"   disableElevation  color='secondary'
      variant="contained"
      aria-label="Disabled elevation buttons">
               <Button  className='tail-bg-[#9C27B0] ' color='secondary' size="small">React</Button>
    <Button  className='tail-bg-[#9C27B0] ' color='secondary' size="small">Material UI</Button>
    <Button className='tail-bg-[#9C27B0] 'color='secondary' size="small">Mongoose</Button>
    <Button className='tail-bg-[#9C27B0] 'color='secondary' size="small">Node</Button>
    <Button className='tail-bg-[#9C27B0] 'color='secondary' size="small">Express</Button>
    <Button className='tail-bg-[#9C27B0] 'color='secondary' size="small">JWT</Button>
    <Button className='tail-bg-[#9C27B0] 'color='secondary' size="small">Firebase</Button>
               </ButtonGroup>
            </Grid>
    <ButtonGroup color='secondary'>
    <Button size='medium'><Link href={live}>Live Link</Link></Button>
    <Button size="medium"><Link href={client}>Client git Link</Link></Button>
    <Button size="medium"><Link href={server}>Backend git Link</Link></Button>
    </ButtonGroup>
        </CardActions>
      </Card>
    );
};

export default ProjectCard;