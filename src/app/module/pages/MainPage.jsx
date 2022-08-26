import { Swiper, SwiperSlide } from "swiper/react";
import '../components/css/MainPage/SwiperStyle.css'
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper";
import MainLayout from "../../../_basic/pages/layout/MainLayout"
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage";
export default function MainPage() {
    return (
        <MainLayout>
            <Swiper
                direction={"vertical"}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={{ width: '100%'}}> <FirstPage /></SwiperSlide>
                <SwiperSlide style={{ width: '100%' }}> <SecondPage /></SwiperSlide>
                {/* <SwiperSlide>  2</SwiperSlide> */}
                {/* <FirstPage /> */}
            </Swiper>
        </MainLayout>
    )
}