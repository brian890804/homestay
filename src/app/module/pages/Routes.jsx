import MoveTop from "../../../_basic/pages/block/MoveTop";
import MainPage from "./MainPage";
import LegalHomeStay from "./LegalHomeStay";
import RoomIntroduce from "./RoomIntroduce";
import Reservation from "./Reservation";
import Traffic from "./Traffic";
import ContactUs from "./ContactUs";
import FooterIntroduce from "./FooterIntroduce";
export default function Routes({ show }) {
  return (
    <>
      <MoveTop show={show} />
      <MainPage />
      <LegalHomeStay />
      <RoomIntroduce />
      <Reservation />
      <Traffic />
      <ContactUs />
      <FooterIntroduce />
    </>
  );
}
