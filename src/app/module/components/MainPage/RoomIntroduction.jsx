import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/MainPage/SwiperStyle.css";
import Room1 from '../../../../assets/Room/Room1.jpg'
import { Pagination } from "swiper";
export default function RoomIntroduction() {
    const Roooms = [Room1, Room1]

    return (
        <div style={{ position: 'relative' }}>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    Roooms.map((data, index) =>
                        <SwiperSlide
                            key={index}
                            style={{ height: '30%' }}>
                            <img src={data} alt='' />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}