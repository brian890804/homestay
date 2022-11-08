import * as React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BuildIcon from "@mui/icons-material/Build";
import ShareIcon from "@mui/icons-material/Share";
import LetterIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/LocalPhone";
import LineIcon from '../../../assets/Logo/Line.png';
import { useCallback } from "react";

export default function EffectBox({ setBgOpen, show }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setBgOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setBgOpen(false);
  };

  const onScroll = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  });
  const onReservation = useCallback(() => {
    window.open(import.meta.env.VITE_BOOKING_URL);
  });
  const onShare = useCallback(async () => {
    if (navigator.share) {
      await navigator.share({
        title: "九份生活民宿空間",
        text: "九份最舒適的民宿",
        url: window.location.href,
      });
    }
  });
  const onContactUs = useCallback(() => {
    window.location.href = "tel:+886-9-86310045";
  });
  const onOpenLine = useCallback(() => {
    window.open("https://liff.line.me/1645278921-kWRPP32q/?accountId=958fdsep");
  });
  const actions = [
    {
      icon: <ArrowUpwardIcon />,
      name: "回頂部",
      onClick: onScroll,
    },
    {
      icon: <CalendarTodayIcon />,
      name: "前往訂房",
      onClick: onReservation,
    },
    {
      icon: <ShareIcon />,
      name: "分享",
      onClick: onShare,
    },
    {
      icon: <PhoneIcon />,
      name: "聯絡我們",
      onClick: onContactUs,
    },
    { icon: <img src={LineIcon}alt="Line Icon"/>, name: "Line", onClick: onOpenLine },
  ];
  return (
    <EffectBoxElement>
      <Box
        sx={{
          height: "100%",
          transform: "translateZ(0px)",
          position: "fixed",
          bottom: "5%",
          right: "2%",
          zIndex: 20,
          display: show ? "" : "none",
          cursor: "pointer",
          color: "white",
          zIndex: 110,
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: "absolute", bottom: 0, right: "5%" }}
          icon={<BuildIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          FabProps={{
            sx: {
              backgroundImage: "linear-gradient(to right, #ad5389, #4f2764);",
              "&:hover": {
                backgroundImage: "linear-gradient(to right, #ad5389, #4f2764);",
              },
            },
          }}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
      </Box>
    </EffectBoxElement>
  );
}
const EffectBoxElement = styled.div`
  /*  */
  img{
    width:25px;
  }
`;
