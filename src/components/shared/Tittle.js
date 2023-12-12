
import { Container, Typography } from "@mui/material";
import './../shared/tittle.css'

const Tittle = ({tittle}) => {

    return (
       <Container>
       <div className="section_tittle">
<Typography className={`tittleText tail-font-bold tail-text-[#1e1c1c]`} sx={{ textShadow:'0px 1px gray'}} >
    {tittle}
</Typography>
</div>

       </Container>
    );
};

export default Tittle;