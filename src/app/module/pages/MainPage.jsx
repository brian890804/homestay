import MainLayout from "../../../_basic/pages/layout/MainLayout"
import FirstPage from "./FirstPage"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import '../components/css/MainPage/SwiperStyle.css'
export default function MainPage() {
    return (
        <MainLayout>
            <Swiper
                style={{ maxHeight:'100vh',width:'100%' }}
                direction={"vertical"}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide style={{width:'100%'}}> <FirstPage /></SwiperSlide>
                <SwiperSlide style={{width:'100%'}}> <FirstPage /></SwiperSlide>
                {/* <SwiperSlide>  2</SwiperSlide> */}
                {/* <FirstPage /> */}
            </Swiper>

        </MainLayout>
    )
}