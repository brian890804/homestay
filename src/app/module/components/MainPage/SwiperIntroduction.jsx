import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "@emotion/styled";
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
        lazy
        className="mySwiper"
        modules={[Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{
          dynamicBullets: true,
        }}
      >
        <TipBox />
        {Roooms.map((data, index) => (
          <SwiperSlide key={index}>
            <img
              alt={"九份生活民宿資訊圖片"+index}
              src={data}
              loading={"lazy"}
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
  function onClick() {
    window.open(import.meta.env.VITE_BOOKING_URL);
  }
  return (
    <TipContentElement className="fw-bold g-ts-w " isMobile={isMobile}>
      <div className="top white-space-nowrap">THE LIFE SPACE</div>
      <div className="g-bc cursor introduce_container" onClick={onClick}>
        <img src={Calendar} alt="日曆" /> 查詢空房
      </div>
    </TipContentElement>
  );
}
const TipContentElement = styled.div`
  /*  */
  @keyframes recharge-move {
    0% {
      transform: rotate(0) translateX(0) translateY(5px);
    }

    10% {
      transform: rotate(10deg) translateX(5px) translateY(-5px);
    }

    20% {
      transform: rotate(0deg) translateX(0) translateY(5px);
    }

    30% {
      transform: rotate(-10deg) translateX(-5px) translateY(-5px);
    }

    40% {
      transform: rotate(0deg) translateX(0) translateY(5px);
    }

    50% {
      transform: rotate(0deg) translateX(0) translateY(0);
    }
  }
  animation: 2.5s recharge-move infinite;
  animation-delay: 3s;

  .top {
    margin-top: 5%;
    font-size: ${({ isMobile }) => (isMobile ? "0.6rem" : "1.2rem")};
  }

  .introduce_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: ${({ isMobile }) => (isMobile ? "1.2rem" : "2.2rem")};
    white-space: nowrap;
    padding: 5px;
  }

  img {
    max-width: ${({ isMobile }) => (isMobile ? "25px" : "35px")};
    max-height: ${({ isMobile }) => (isMobile ? "25px" : "35px")};
    margin-right: 0.2em;
  }
`;

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
        bottom: isMobile ? "5%" : "15%",
        right: "5%",
        color: "white",
        minWidth: "150px",
      }}
    >
      <div className={styles.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div className={styles.transitionsItem} style={rest}>
            <animated.div style={{ height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
