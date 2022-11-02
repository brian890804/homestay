import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./swiper.css";

import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";
import useResize from "../../Event/Resize";
import { options } from "./Options";

export default function FloatIntroduce({ introduce, handleClick }) {
  const { isMobile } = useResize();
  const { imgItems, text, option, title } = introduce;
  return (
    <FloatIntroduceElement isMobile={isMobile}>
      <div className="float_container">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper wiper mb-3"
        >
          {imgItems.map((img, index) => (
            <SwiperSlide className="wiper" key={index}>
              <img src={img} alt={`${index} img`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="float_container_content">
          <div className="float_container_title">{title}</div>
          <div className="float_container_option">
            <Grid container direction="row" alignItems="center" spacing={2}>
              {option.map((data) => {
                const { text, icon } = options[data];
                return (
                  <Grid item key={text}>
                    <img src={icon} alt={text} />
                    <label>{text}</label>
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
        <ZoomInMapIcon fontSize="large" />
      </div>
    </FloatIntroduceElement>
  );
}

const FloatIntroduceElement = styled.div`
  /*  */
  padding: 5%;
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
  animation: fadeIn 0.5s;

  li {
    list-style: none;
  }

  ol {
    padding: 0;
  }

  .wiper {
    height: auto;
    min-height: 50vh;
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
    animation: move 2s 1s;
    @media (min-width: 599px) {
      max-width: 40vw;
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
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      &_content {
        display: flex;
        flex-flow: column;
        justify-content: center;
        width: 100%;
        @media (min-width: 599px) {
          width: auto;
        }
      }

      &_title {
        font-size: 1.4rem;
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
    top: 0%;
    right: 5%;
    z-index: 999;
    font-size: 2rem;
    font-weight: 800;
  }
`;
