import * as React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BuildIcon from "@mui/icons-material/Build";

const actions = [
  {
    icon: <ArrowUpwardIcon />,
    name: "回頂部",
    onClick: () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
    },
  },
  {
    icon: <CalendarTodayIcon />,
    name: "前往訂房",
    onClick: () => window.open(import.meta.env.VITE_BOOKING_URL),
  },
];

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
`;
