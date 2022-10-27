import Title from "../../../_basic/pages/toolbar/Title";
import styled from "@emotion/styled";
import map from "../../../assets/Traffic/map.png";
import position from "../../../assets/Traffic/position.png";
import GoogleMapReact from "google-map-react";

const LandMark = ({ text }) => (
  <LandMarkElement>{text}這裡這裡</LandMarkElement>
);
const LandMarkElement = styled.div`
  color: pink;
`;

const PositionTip = () => (
  <PositionTipElement>
    <div className="row">
      <div className="col-12 title">九份生活民宿</div>
      <div className="col-12 address mb-2">224新北市瑞芳區烏勢巷6號</div>
      <div className="col-12">
        <a href={import.meta.env.VITE_GOOGLEMAP_HTML} target={"_blank"}>
          顯示詳細地圖
        </a>
      </div>
    </div>
  </PositionTipElement>
);
const PositionTipElement = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 25%;
  margin: 1%;
  padding: 1%;
  align-self: center;
  display: flex;
  border-radius: 5px;

  .title {
    font-size: 1.2rem;
    font-weight: 600;
  }
  .address {
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

export default function Traffic() {
  const defaultProps = {
    center: {
      lat: 25.108,
      lng: 121.8432,
    },
    zoom: 17,
  };
  return (
    <TrafficElement>
      <Title id="reservation">交通導引</Title>
      <div className="topArea">
        <div className="mr-2">
          <img src={map} alt="map" className="img" />
        </div>
        <div className="ml-2">
          <img src={position} alt="position" className="img" />
        </div>
      </div>
      <div className="bottomArea">
        <div style={{ height: "30vh", position: "relative" }}>
          <GoogleMapReact
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLEMAP_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <LandMark lat={25.108} lng={121.8432} text="My Marker" />
          </GoogleMapReact>
          <PositionTip />
        </div>
      </div>
    </TrafficElement>
  );
}

const TrafficElement = styled.div`
  /*  */
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
