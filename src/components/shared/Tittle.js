import { Container, Typography } from "@mui/material";
import './../shared/tittle.css'

const Tittle = ({tittle}) => {
    return (
       <Container>
       <div class="section_tittle">
<Typography className="tittleText">
    {tittle}
</Typography>
</div>

       </Container>
    );
};

export default Tittle;