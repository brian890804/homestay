import MoveTop from "../../../_basic/pages/block/MoveTop";
import MainPage from "./MainPage"
import LegalHomeStay from "./LegalHomeStay";
import RoomIntroduce from "./RoomIntroduce";
import Reservation from "./Reservation";
import '../components/css/MainPage/SwiperStyle.css'
import "swiper/css/pagination";
import "swiper/css";
export default function Routes({ show }) {
    return (
        < >
            <MoveTop show={show} />
            <MainPage />
            <LegalHomeStay />
            <RoomIntroduce />
            <Reservation />
        </>
    )
}