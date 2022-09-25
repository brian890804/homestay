import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import MainLayout from "../../../_basic/pages/layout/MainLayout"
import MoveTop from "../../../_basic/pages/block/MoveTop";
import FirstPage from "./MainPage"
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import '../components/css/MainPage/SwiperStyle.css'
import "swiper/css/pagination";
import "swiper/css";
export default function MainPage() {
    const [show, set] = useState(false);
    return (
        <MainLayout>
            {/* <Swiper
                className="mySwiper"
                direction={"vertical"}
                style={{ position: 'relative' }}
                pagination={{
                    clickable: true,
                }}
                onSlideChange={(x) => x.activeIndex > 0 ? set(true) : set(false)}
                modules={[Pagination]}
            > */}
            <MoveTop show={show} />
            <FirstPage />
            <SecondPage />
            {/* <ThirdPage /> */}
            {/* </Swiper> */}
        </MainLayout>
    )
}