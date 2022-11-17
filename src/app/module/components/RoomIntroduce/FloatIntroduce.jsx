import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { Scrollbar, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./swiper.css";

import ZoomIcon from "@mui/icons-material/ZoomInMap";
import useResize from "../../Event/Resize";
import { options } from "./Options";

export default function FloatIntroduce({ introduce, handleClick, closeShow }) {
  const { isMobile } = useResize();
  const { imgItems, text, option, title } = introduce;
  return (
    <FloatIntroduceElement isMobile={isMobile}>
      <div className="cover" onClick={closeShow}></div>
      <div className="float_container">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          navigation={!isMobile}
          modules={[Scrollbar, Navigation]}
          className="mySwiper wiper mb-3"
        >
          {imgItems.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`${index} img`} className="wiper" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="float_container_content">
          <div className="float_container_title">{title}</div>
          <div className="float_container_option ">
            <Grid container direction="row" alignItems="center" spacing={1}>
              {option.map((data) => {
                const { text, icon } = options[data];
                return (
                  <Grid item key={text}>
                    <img
                      src={icon}
                      alt={text}
                      className="float_container_icon"
                    />
                    <label className="float_container_icon_text">{text}</label>
                  </Grid>
                );
              })}
            </Grid>
          </div>
          <div className="divider my-3"> &nbsp;</div>
          <div className="float_container_text">{text}</div>
        </div>
      </div>
      <div className="close cursor" onClick={handleClick}>
        <ZoomIcon fontSize="large" />
      </div>
    </FloatIntroduceElement>
  );
}

const FloatIntroduceElement = styled.div`
  /*  */
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 901;
    background-color: black;
    opacity: 0.8;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;

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
  animation: fadeIn 0.5s;

  li {
    list-style: none;
  }

  ol {
    padding: 0;
    margin-bottom: 0;
  }

  .wiper {
    height: auto;
    &:last-child {
      animation: move 2s 1s;
    }
    @keyframes move {
      0% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(-40px, 0);
      }
      50% {
        transform: translate(0px, 0);
      }
      75% {
        transform: translate(-60px, 0);
      }
    }

    @media (min-width: 599px) {
      width: auto;
      min-height: 50vh;
      max-width: 50vw;
    }
  }
  .divider {
    background-color: black;
    height: 2px;
    width: 100%;
    @media (min-width: 599px) {
      width: 40vw;
    }
  }
  .float {
    &_container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      z-index: 990;
      flex-flow: column;
      opacity: 1;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      margin: 15% 0;
      padding: 5%;
      @media (min-width: 599px) {
        padding: 0%;
        margin: 0% 15%;
      }
      &_icon {
        width: 20px;
        @media (min-width: 599px) {
          width: 35px;
        }
        &_text {
          font-size: 0.8rem;
          @media (min-width: 599px) {
            font-size: 1.2rem;
          }
        }
      }

      &_content {
        display: flex;
        flex-flow: column;
        justify-content: center;
        width: 100%;
        @media (min-width: 599px) {
          max-width: 40vw;
        }
      }

      &_title {
        font-size: 1.4rem;
        font-weight: 600;
        @media (min-width: 599px) {
          font-size: 1.5rem;
        }
      }

      &_option {
        font-size: 0.6rem;
        @media (min-width: 599px) {
          font-size: 1rem;
        }
      }

      &_text {
        @media (min-width: 599px) {
          font-size: 1.3rem;
        }
      }
    }
  }

  .close {
    position: absolute;
    top: 8%;
    right: 2%;
    z-index: 999;
    font-size: 2rem;
    font-weight: 800;
    @media (min-width: 599px) {
      top: 0%;
      right: 18%;
    }
  }
`;
