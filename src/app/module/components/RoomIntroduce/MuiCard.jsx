import { useState, useCallback, memo, useEffect } from "react";
import styled from "@emotion/styled";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useResize from "../../Event/Resize";

import ButtonBG from "../../../../assets/Room/Button.png";
import FloatIntroduce from "./FloatIntroduce";

const areEqual = (pre, next) => {
  return JSON.stringify(pre) === JSON.stringify(next);
};

function MuiCard({ item }) {
  const { isMobile } = useResize();
  const [show, set] = useState(false);
  const handleClick = useCallback(() => {
    set((pre) => !pre);
  });
  useEffect(() => {
    const onScroll = () => {
      set(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <MuiCardElement show={show}>
      <div className="text-start fw-bold ">
        <img
          src={ButtonBG}
          alt="zoom_button"
          className="zoom_button"
          onClick={handleClick}
        />
        <CardMedia
          component="img"
          className="img"
          height={isMobile ? "150" : "300"}
          src={item.img}
          draggable={false}
          alt={`img ${item.name}`}
        />
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
      {show && (
        <FloatIntroduce introduce={item?.introduce} handleClick={handleClick} />
      )}
    </MuiCardElement>
  );
}
export default memo(MuiCard, areEqual);
const MuiCardElement = styled.div`/*  */
  position:relative;
  width:100%,
  height:100%;
  transition: ${({ show }) => !show && ".5s"};
  cursor:default;
  :hover{
    transform:${({ show }) => !show && "scale(1.03)"};
    background-image:linear-gradient(to right, #ad5389, #4f2764);
    color:${({ show }) => !show && "#fff"};
    opacity:${({ show }) => !show && "0.9"};
  }

  .zoom_button{
    position: absolute; 
    top: 0; 
    z-index: 10;
    right: 0 ;
    :hover{
      ${({ show }) => !show && " transform:scale(1.1);"};
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
