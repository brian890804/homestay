import { Grid } from "@mui/material";
import styled from "@emotion/styled";

import Title from "../../../_basic/pages/toolbar/Title";
import Pic from "../../../assets/Reservation/Pic1.png";
import Divider from "@mui/material/Divider";
import useResize from "../Event/Resize";
export default function Reservation() {
  const { isMobile } = useResize();
  return (
    <ReservationElement isMobile={isMobile}>
      <section>
        <header>
          <h2>
            <Title id="reservation">訂房說明</Title>
          </h2>
        </header>
        <Grid container direction="row" justifyContent="center">
          <Grid item sm={6} xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              align-item="center"
              className="px-3 pt-3 fw-bold"
              sx={{ fontSize: "1.2rem" }}
            >
              <Grid item sm={6} xs={6} className="title">
                【住房時間】
              </Grid>
              <Grid item sm={6} xs={6} />
              <Grid item sm={12} xs={12} className="px-2 content">
                進房Check in時間為下午04:00-22:00。
              </Grid>
              <Grid item sm={12} xs={12} className="px-2 content">
                退房Check
                out時間為隔日中午12：00前退房，逾期將視情況收取費用（超過30分鐘加收$500)
              </Grid>
              <Grid item sm={12} xs={12} className="pt-3 pl-2 fw-bold content">
                <Divider />
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="space-around"
              className="px-3 pt-3 fw-bold"
            >
              <Grid item sm={12} xs={12} className="title">
                【住房通知】
              </Grid>
              <Grid item sm={12} xs={12} className="title">
                <ol className="pl-1 ">
                  <li>
                    📍透過官網訂房，官網顯示最終價格，不會另加收服務費、稅金
                  </li>
                  <li>📍房內嚴禁吸菸</li>
                  <li>
                    📍為了避免給其他旅客帶來不便，恕不接受攜帶寵物入住，以維
                    護住宿的品質。請勿私自攜帶寵物，業者有權拒絕入住，不退訂金
                  </li>
                  <li>
                    📍若入住後發現私帶寵物，業者有權索取清潔費為房價的1倍金額
                  </li>
                  <li>📍附設免費Wi-Fi，帳號密碼都在房間門上</li>
                  <li>
                    📍加床每人加收500元/單加棉被加收清潔費$100元/單加枕頭加收清潔費$50元
                  </li>
                  <li>📍本民宿沒有提供客房打掃服務</li>
                  <li>📍若未加床未滿120CM孩童不收費/滿7歲或滿120cm皆須收費</li>
                  <li className="font_red">
                    📍訂房時將會收取30%訂金，剩餘費用於入住時收款
                    依照觀光局訂房規範:前2-3日取消訂房: 退訂金的30%
                    前1日取消訂房: 退訂金的20% 當日取消訂房: 0% (不予退還訂金
                  </li>
                  <li>
                    📣若有其他問題可以撥打此電話聯繫我們：0986310045
                    LINE官方帳號ID:@958fdsep
                  </li>
                </ol>
              </Grid>
            </Grid>
          </Grid>

          {!isMobile && (
            <Grid item sm={6} xs={12}>
              <img src={Pic} alt="九份生活空間民宿 大門" className="img" />
            </Grid>
          )}
        </Grid>
      </section>
    </ReservationElement>
  );
}

const ReservationElement = styled.div`
  /*  */
  .title {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: ${({ isMobile }) => (isMobile ? "1.2rem" : "1.6rem")};
  }
  .icon_button {
    border-style: double;
    border: 1px solid;
    margin-right: 5px;
    width: 25px;
    height: 25px;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .MuiSvgIcon-root {
    width: 15px;
  }
  .content,
  ol {
    list-style: none;
    font-size: ${({ isMobile }) => (isMobile ? "0.8rem" : "1.2rem")};
  }
  li {
    margin-bottom: 1px;
  }
  .font_red {
    color: red;
  }
`;
