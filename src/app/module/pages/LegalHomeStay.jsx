import Title from "../../../_basic/pages/toolbar/Title";
import styled from "@emotion/styled";
import license from "../../../assets/License/license.png";
import view from "../../../assets/View/view.png";
import View1 from "../../../assets/LegalHomeStay/1.png";
import View2 from "../../../assets/LegalHomeStay/2.png";
import View3 from "../../../assets/LegalHomeStay/3.png";
import useResize from "../Event/Resize";

export default function LegalHomeStay() {
  const RoomItems = [View1, View2, View3];
  const { isMobile } = useResize();
  return (
    <SecondPageElement>
      <Title id="legalHomeStay">新北市合法民宿</Title>
      <div className="row body justify-content-center">
        <div className="col-lg-4 col-6 mb-3 ">
          <img
            src={license}
            className="body_introduce_img_license"
            alt="logo"
          />
        </div>
        <div
          className={`
                    col-lg-8
                    col-12 
                    text-start 
                    fw-bold fs-6
                    `}
        >
          <div className="row">
            <div className="col-12 body_introduce_text">
              版權所有為生活空間民宿。電話：0986310045 地址：
              新北市瑞芳區九份烏勢巷6號 {!isMobile && <br />}北縣
              觀光局核准合法民宿編號120號 99年1月12日北府觀管字第0990879564號
            </div>
          </div>
          {!isMobile && (
            <div className="row mt-2 ">
              {RoomItems.map((item, index) => (
                <div className="col-4 p-1" key={index}>
                  <img
                    loading={"lazy"}
                    src={item}
                    alt={`2022 台灣九份民宿推薦房型${index}`}
                    className="body_introduce_img_item"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-12">
          <img src={view} className="body_introduce" alt="九份生活空間民宿Logo" />
        </div>
      </div>
    </SecondPageElement>
  );
}

const SecondPageElement = styled.div`
  /*  */
  width: 100%;
  height: 100%;
  .body {
    padding: 2%;
    &_introduce {
      background-repeat: no-repeat;
      width: 100%;
      height: auto;
      &_img {
        &_license {
          object-fit: cover;
          width: 100%;
        }

        &_item {
          width: 100%;
          height: 100%;
        }
      }
      &_text {
        line-height: 30px;
        font-size: 1rem;
        @media (max-width: 599px) {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
