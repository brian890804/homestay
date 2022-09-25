import React, { useState, useCallback, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { isMobile } from 'react-device-detect';
import "swiper/css";
import "swiper/css/pagination";
import "../css/MainPage/SwiperStyle.css";
import Room1 from '../../../../assets/Room/Room1.png'
import Room2 from '../../../../assets/Room/Room2.png'
import Room4 from '../../../../assets/Room/Room4.png'
import Room5 from '../../../../assets/Room/Room5.png'
import Room6 from '../../../../assets/Room/Room6.png'
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { useTransition, animated, useSpring } from '@react-spring/web'
import styles from '../css/MainPage/RoomIntroduction.css'
export default function RoomIntroduction() {
    SwiperCore.use([Autoplay])
    const Roooms = [Room1, Room2, Room4, Room5, Room6]
    return (
        <>
            <Swiper
                className="mySwiper"
                modules={[Pagination]}
                autoplay={{ delay: 5000, }}
                pagination={{
                    dynamicBullets: true,
                }}
            >
                <TipBox />
                {
                    Roooms.map((data, index) =>
                        <SwiperSlide key={index}  >
                            <img alt='' src={data}
                                style={{
                                    width: '100%',
                                    height: '400px',
                                    objectFit: 'cover'
                                }} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    )
}
function TipContent() {
    const styles = useSpring({
        loop: { reverse: true },
        config: { duration: 300 },
        from: { y: 0 },
        to: { y: -2 },
        delay: 350,
    })
    return (
        <animated.div className='fw-bold g-ts-w' style={styles} >
            <div
                style={{
                    fontSize: isMobile ? '0.9em' : '1em',
                }}>
                THE LIFE SPACE
            </div>
            <div
                className='g-bc '
                style={{
                    width: '100%',
                    fontSize: isMobile ? '1.6em' : '2em',
                    padding: 10
                }}
                onClick={() => console.log('123')}
            >房型介紹</div>
        </animated.div >
    )
}
function TipBox() {
    const ref = useRef([])
    const [items, set] = useState([])
    const transitions = useTransition(items, {
        from: {
            opacity: 0,
            height: 0,
            innerHeight: 0,
            color: '#FFF',
        },
        enter: [
            { opacity: 1, height: 80, innerHeight: 150 },
        ],
    })
    const runAnimation = useCallback(() => {
        ref.current.forEach(clearTimeout)
        ref.current = []
        set([])
        ref.current.push(set([
            <TipContent />
        ]))
    }, [])
    useEffect(() => {
        runAnimation()
    }, [])
    return (
        <div
            style={{
                position: 'absolute',
                zIndex: 1,
                width: isMobile ? '18vh' : '30vh',
                bottom: '10%', right: '5%',
                color: 'white',
            }}>
            <div className={styles.main}>
                {transitions(({ innerHeight, ...rest }, item) => (
                    <animated.div className={styles.transitionsItem} style={rest} >
                        <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                    </animated.div>
                ))}
            </div>
        </div >
    )
}