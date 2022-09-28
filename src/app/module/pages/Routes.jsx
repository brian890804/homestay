import MainLayout from "../../../_basic/pages/layout/MainLayout"
import MoveTop from "../../../_basic/pages/block/MoveTop";
import FirstPage from "./MainPage"
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import '../components/css/MainPage/SwiperStyle.css'
import "swiper/css/pagination";
import "swiper/css";
export default function MainPage({ show }) {
    return (
        <MainLayout >
            <MoveTop show={show} />
            <FirstPage />
            <SecondPage />
            <ThirdPage />
        </MainLayout>
    )
}