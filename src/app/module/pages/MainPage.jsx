import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import MainLayout from "../../../_basic/pages/layout/MainLayout"
import MoveTop from "../../../_basic/pages/block/MoveTop";
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage";
import '../components/css/MainPage/SwiperStyle.css'
import "swiper/css/pagination";
import "swiper/css";
export default function MainPage() {
    const [show, set] = useState(false);
    return (
        <MainLayout>
            <Swiper
                direction={"vertical"}
                pagination={{
                    clickable: true,
                }}
                onSlideChange={(x) => x.activeIndex > 0 ? set(true) : set(false)}
                modules={[Pagination]}
                className="mySwiper"
            >
                <MoveTop show={show} />
                <SwiperSlide style={{ width: '100%' }}> <FirstPage /></SwiperSlide>
                <SwiperSlide style={{ width: '100%' }}> <SecondPage /></SwiperSlide>
            </Swiper>
        </MainLayout>
    )
}