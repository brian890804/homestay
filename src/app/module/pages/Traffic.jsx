import { useState, useCallback } from "react";
import Title from "../../../_basic/pages/toolbar/Title";
import map from "../../../assets/Traffic/map.png";
import position from "../../../assets/Traffic/position.png";
import useResize from "../Event/Resize";

import IconButton from "@mui/material/IconButton";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import styled from "@emotion/styled";
import GoogleMapReact from "google-map-react";
import RoomIcon from "@mui/icons-material/Room";

const LandMark = ({ text, setShow }) => {
  const onClick = useCallback(() => setShow((pre) => !pre));
  return (
    <LandMarkElement onClick={onClick}>
      <RoomIcon color="warning" fontSize="large" />
    </LandMarkElement>
  );
};
const LandMarkElement = styled.div``;

const PositionTip = () => {
  const { isMobile } = useResize();
  const toGoogleRoute = useCallback(
    () => window.open(import.meta.env.VITE_GOOGLEMAP_URL_ROUTE),
    []
  );
  return (
    <PositionTipElement>
      <div className="row ">
        <div className="col-sm-12 col-8 title">九份生活民宿</div>
        {!isMobile && (
          <div className="col-sm-9  address mb-2">224新北市瑞芳區烏勢巷6號</div>
        )}

        <div className="col-sm-3 col-4">
          <IconButton onClick={toGoogleRoute}>
            <AltRouteIcon
              fontSize={isMobile ? "small" : "large"}
              color="primary"
            />
          </IconButton>
        </div>
        <div className="col-12 detail">
          <a
            href={import.meta.env.VITE_GOOGLEMAP_URL_POSITION}
            target={"_blank"}
          >
            顯示詳細地圖
          </a>
        </div>
      </div>
    </PositionTipElement>
  );
};
const PositionTipElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  max-width: 35%;
  margin: 2%;
  padding: 1%;
  display: flex;
  border-radius: 5px;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeIn 2s ease;
  .title {
    font-size: 1.2rem;
    font-weight: 600;
  }
  .address {
    font-size: 0.8rem;
    font-weight: 500;
  }

  @media (max-width: 599px) {
    max-width: 40%;
    .title {
      font-size: 0.8rem;
    }

    .detail {
      font-size: 0.4rem;
    }
  }
`;

export default function Traffic() {
  const defaultProps = {
    center: {
      lat: 25.1087319,
      lng: 121.8451387,
    },
    zoom: 19.52,
  };
  const [show, setShow] = useState(false);
  return (
    <TrafficElement>
      <Title id="traffic">交通導引</Title>
      <div className="topArea">
        <div className="mr-2">
          <img src={map} alt="map" className="img" />
        </div>
        <div className="ml-2">
          <img src={position} alt="position" className="img" />
        </div>
      </div>
      <div className="bottomArea">
        <div style={{ height: "50vh", position: "relative" }}>
          <GoogleMapReact
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLEMAP_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <LandMark
              lat={25.1088259}
              lng={121.8454517}
              text="My Marker"
              setShow={setShow}
            />
          </GoogleMapReact>
          {show && <PositionTip />}
        </div>
      </div>
    </TrafficElement>
  );
}

const TrafficElement = styled.div`
  /*  */
  transition-duration: 20s;
  .topArea {
    padding: 0% 5%;
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
  }
  .bottomArea {
    padding: 0% 5%;
    margin-bottom: 20px;
  }
  .img {
    margin: 5px;
    width: 100%;
  }
`;
