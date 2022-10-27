import { useState, useCallback } from "react";
import styled from "@emotion/styled";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import useResize from "../Event/Resize";

import ButtonBG from "../../../assets/Room/Button.png";

export default function MuiCard({ item }) {
  const [control, set] = useState(false);
  const { isMobile } = useResize();
  const handleZoomChange = useCallback((shouldZoom) => {
    console.log(shouldZoom, "shouldZoom");
    set(shouldZoom);
  }, []);
  return (
    <MuiCardElement>
      <div className="text-start fw-bold ">
        <img
          src={ButtonBG}
          alt="zoom_button"
          className="zoom_button"
          onClick={handleZoomChange}
        />
        <ControlledZoom
          isZoomed={control}
          onZoomChange={(event) => !event && set(false)}
        >
          <CardMedia
            component="img"
            className="img"
            height={isMobile ? "180" : "300"}
            src={item.img}
            draggable={false}
            alt={`img ${item.name}`}
          />
        </ControlledZoom>
      </div>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-start fw-bold title"
        >
          {item.name}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          className="fw-bolder description"
        >
          {item.description}
        </Typography>
      </CardContent>
    </MuiCardElement>
  );
}

const MuiCardElement = styled.div`/*  */
  position:relative;
  width:100%,
  height:100%;
  transition: .5s;
  cursor:default;
  :hover{
    transform:scale(1.03);
    background-image:linear-gradient(to right, #ad5389, #4f2764);
    color:white;
    opacity:0.9;
  }

  .zoom_button{
    position: absolute; 
    top: 0; 
    z-index: 998;
    right: 0 ;
    :hover{
        transform:scale(1.1);
    }
    @media (max-width:599px){
      max-width:60px;
    }
  }

  @media (max-width:599px){
   .title{
     font-size:1rem;
    }
    .description{
        font-size:0.8rem;
    }
}
`;
