import React, { useState, useCallback, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/MainPage/SwiperStyle.css";
import Room1 from "../../../../assets/Room/Room1.png";
import Room2 from "../../../../assets/Room/Room2.png";
import Room4 from "../../../../assets/Room/Room4.png";
import Room5 from "../../../../assets/Room/Room5.png";
import Room6 from "../../../../assets/Room/Room6.png";
import Calendar from "../../../../assets/Room/calendar.png";

import SwiperCore, { Pagination, Autoplay } from "swiper";
import { useTransition, animated, useSpring } from "@react-spring/web";
import styles from "../css/MainPage/RoomIntroduction.css";
import useResize from "../../Event/Resize";
export default function SwiperIntroduction() {
  SwiperCore.use([Autoplay]);
  const Roooms = [Room1, Room2, Room4, Room5, Room6];
  return (
    <>
      <Swiper
        className="mySwiper"
        modules={[Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{
          dynamicBullets: true,
        }}
        style={{ height: "10%" }}
      >
        <TipBox />
        {Roooms.map((data, index) => (
          <SwiperSlide key={index}>
            <img
              alt=""
              src={data}
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
function TipContent() {
  const { isMobile } = useResize();
  const styles = useSpring({
    loop: { reverse: true },
    config: { duration: 300 },
    from: { y: 0 },
    to: { y: -2 },
    delay: 350,
  });
  function onClick() {
    window.open(import.meta.env.VITE_BOOKING_URL);
  }
  return (
    <animated.div className="fw-bold g-ts-w " style={styles}>
      <div
        style={{
          fontSize: isMobile ? "0.9rem" : "1.2rem",
        }}
      >
        THE LIFE SPACE
      </div>
      <div
        className="g-bc cursor"
        style={{
          width: "100%",
          fontSize: isMobile ? "1.6rem" : "2.2rem",
          whiteSpace: "nowrap",
          display: "flex",
          padding: 5,
          justifyContent: "center",
        }}
        onClick={onClick}
      >
        <img
          src={Calendar}
          alt="日曆"
          style={{
            maxWidth: isMobile ? "35px" : "50px",
            marginRight: isMobile ? "0.2em" : "0.5em",
          }}
        />{" "}
        查詢空房
      </div>
    </animated.div>
  );
}
function TipBox() {
  const ref = useRef([]);
  const { isMobile } = useResize();
  const [items, set] = useState([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      color: "#FFF",
    },
    enter: [{ opacity: 1, height: 80, innerHeight: 150 }],
  });
  const runAnimation = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(set([<TipContent />]));
  }, []);
  useEffect(() => {
    runAnimation();
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        textAlign: "center",
        zIndex: 1,
        width: isMobile ? "40vw" : "15vw",
        bottom: "10%",
        right: "5%",
        color: "white",
      }}
    >
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div className={styles.transitionsItem} style={rest}>
            <animated.div style={{ overflow: "hidden", height: innerHeight }}>
              {item}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
