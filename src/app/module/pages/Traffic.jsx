import Title from "../../../_basic/pages/toolbar/Title";
import styled from "@emotion/styled";
import map from "../../../assets/Traffic/map.png";
import position from "../../../assets/Traffic/position.png";
import { key } from "../components/Taffic/key";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div style={{color:'pink'}}>{text}這裡這裡</div>;
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
        <div style={{height:'20vh',widht:'100%'}}>
          <GoogleMapReact
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{ key: key }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={25.108}
              lng={121.8432}
              text="My Marker"
            />
          </GoogleMapReact>
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
