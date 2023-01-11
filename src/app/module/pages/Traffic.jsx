import Title from "../../../_basic/pages/toolbar/Title";
import map from "../../../assets/Traffic/map.png";
import position from "../../../assets/Traffic/position.png";

import styled from "@emotion/styled";

export default function Traffic() {
  return (
    <TrafficElement>
      <section>
        <header>
          <h2>
            <Title id="traffic">交通導引</Title>
          </h2>
        </header>
        <div className="topArea">
          <div className="mr-2">
            <img src={map} alt="九份生活空間民宿 交通指引圖" className="img" />
          </div>
          <div className="ml-2">
            <img
              src={position}
              alt="GoogleMap 九份生活空間民宿"
              className="img"
            />
          </div>
        </div>
        <div className="bottomArea">
          <div>
            <iframe
              title="九份民宿地址"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1806.3980032916104!2d121.84475700104075!3d25.108765798223853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d451811463bbf%3A0x5f2219e9cb9e39d6!2z55Sf5rS756m66ZaT5rCR5a6_!5e0!3m2!1szh-TW!2stw!4v1673019947388!5m2!1szh-TW!2stw"
              width={"100%"}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
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
    width: 100%;
  }
`;
