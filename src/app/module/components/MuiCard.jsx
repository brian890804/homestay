import * as React from 'react';
import styled from "@emotion/styled";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export default function MuiCard({ item }) {
    return (
        <MuiCardElement>
            <CardActionArea className="text-start fw-bold box"  >
                <CardMedia
                    component="img"
                    className="img"
                    height="300"
                    src={item.img}
                    draggable={false}
                    alt={`img ${item.name}`}
                />
            </CardActionArea>
            <CardContent className="text-start fw-bold" >
                <Typography gutterBottom variant="h5" component="div" >
                    {item.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" className='fw-bolder'>
                    {item.description}
                </Typography>
            </CardContent>
        </MuiCardElement>
    )
}

const MuiCardElement = styled.div`/*  */
  width:100%,
  height:100%;

  .img{
    transition: .5s;
  }

  .box:hover img{
    transform:scale(1.01);
  }
`;