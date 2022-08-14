import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/MainPage/SwiperStyle.css";
import Room1 from '../../../../assets/Room/Room1.svg'
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
                        <SwiperSlide key={index} style={{ height: '30%' }}>
                            <img alt='' src={data} />
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '10%', right: '5%',
                                    color: 'white',
                                    width:'20vw'
                                }}>
                                <div>THE LIFE SPEACE</div>
                                <div style={{
                                    display: 'flex',
                                    height: '10vh',
                                    width: '100%',
                                    // fontSize:'2rem',
                                    backgroundColor: '#7E417A',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>房型介紹</div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}