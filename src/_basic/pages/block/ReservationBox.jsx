import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Calendar from "../../../assets/Room/calendar.png";
export default function ReservationBox({ show }) {
  return (
    <IconButton
      className="g-bc"
      style={{
        position: "fixed",
        bottom: "15%",
        right: "2%",
        zIndex: 20,
        display: show ? "" : "none",
        cursor: "pointer",
        color: "white",
      }}
      size="large"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img src={Calendar} alt="Calendar" style={{ maxWidth: "25px" }} />
    </IconButton>
  );
}
