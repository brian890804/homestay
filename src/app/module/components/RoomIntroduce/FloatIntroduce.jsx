import styled from "@emotion/styled";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./swiper.css";

import useResize from "../../Event/Resize";

export default function FloatIntroduce({ introduce, handleClick }) {
  const { isMobile } = useResize();
  const { imgItems, text, option, title } = introduce;
  return (
    <FloatIntroduceElement isMobile={isMobile}>
      <div className="container">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {imgItems.map((img, index) => (
            <SwiperSlide>
              <img src={img} alt={`${index} img`} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div>{title}</div>
        <div>{option}</div>
        <div>{text}</div>
      </div>
      <div className="close cursor" onClick={handleClick}>
        X
      </div>
    </FloatIntroduceElement>
  );
}

const FloatIntroduceElement = styled.div`
  /*  */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 990;
  background-color: #fff;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
  animation:fadeIn 0.5s ;

  li {
    list-style: none;
  }

  img {
    width: 100%;
    object-fit: contain;
 
    @keyframes move {
      0% {
        transform:translate(0,0)
      }
      25%{
        transform:translate(-20px,0)
      }
      50% {
        transform:translate(20px,0)
      }
      75% {
        transform:translate(0,0)
      }
    }
    animation:move 2s 2s;
  }
  .container {
    padding: 5%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
  .close {
    position: absolute;
    top: 5%;
    right: 5%;
    font-size: 2rem;
    font-weight: 800;
  }
`;
