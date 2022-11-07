import { useCallback } from "react";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";

import PhoneIcon from "@mui/icons-material/LocalPhone";
import LetterIcon from "@mui/icons-material/Email";
import ShareIcon from "@mui/icons-material/Share";

import Title from "../../../_basic/pages/toolbar/Title";
import Pic from "../../../assets/Reservation/Pic1.png";
import Divider from "@mui/material/Divider";
export default function Reservation() {
  let Icons = [
    {
      name: "cellphone",
      source: PhoneIcon,
      url: "tel:+886-9-86310045",
    },
    {
      name: "letter",
      source: LetterIcon,
      url: "https://liff.line.me/1645278921-kWRPP32q/?accountId=958fdsep",
    },
    { name: "share", source: ShareIcon },
  ];
  const onClick = useCallback(async (data) => {
    const { name, url } = data;
    if (name === "cellphone") {
      window.location.href = url;
    } else if (name === "letter") {
      window.open(url);
    } else {
      if (navigator.share) {
        await navigator.share({
          title: "九份生活民宿空間",
          text: "九份最舒適的民宿",
          url: window.location.href,
        });
      }
    }
  });
  return (
    <ReservationElement>
      <Title id="reservation">訂房說明</Title>
      <Grid container direction="row" justifyContent="center" spacing={2}>
        <Grid item sm={6} xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            className="px-3 pt-3 fw-bold"
          >
            <Grid item sm={6} xs={6} className="title">
              【住房時間】
            </Grid>
            <Grid item sm={6} xs={6} className="text-end">
              {Icons.map((data, index) => (
                <IconButton
                  key={index}
                  className="icon_button"
                  onClick={() => onClick(data)}
                >
                  <data.source />
                </IconButton>
              ))}
            </Grid>
            <Grid item sm={12} xs={12} className="px-2">
              進房Check in時間為下午03:00-23:30。
            </Grid>
            <Grid item sm={12} xs={12} className="px-2">
              退房Check
              out時間為隔日中午12：00前退房，逾期將視情況收取費用（超過30分鐘加收$500)
            </Grid>
            <Grid item sm={12} xs={12} className="pt-3 pl-2 fw-bold">
              <Divider />
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="space-around"
            className="px-3 pt-3 fw-bold"
          >
            <Grid item sm={12} xs={12} className=" title">
              【住房通知】
            </Grid>
            <Grid item sm={12} xs={12} className=" title">
              <ol
                style={{ listStyle: "none", fontSize: "16px" }}
                className="pl-1 "
              >
                <li></li>
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
                  們將安排人員為您辦理入住
                </li>
                <li>📍附設免費Wi-Fi，帳號密碼都在房間門上</li>
                <li>📍加床每人加收500元/單加棉被加收清潔費$100元</li>
                <li> 📍若未加床未滿120CM孩童不收費</li>
                <li>
                  📍訂房時將會收取30%訂金，剩餘費用於入住時收款
                  依照觀光局訂房規範:前2-3日取消訂房: 退訂金的30% 前1日取消訂房:
                  退訂金的20% 當日取消訂房: 0% (不予退還訂金
                </li>
                <li>
                  {" "}
                  📣若有其他問題可以撥打此電話聯繫我們：0986310045
                  LINE官方帳號ID:@958fdsep
                </li>
              </ol>
            </Grid>
            <Grid item sm={12} xs={12} className="px-2">
              進房Check in時間為下午03:00-23:30。
            </Grid>
            <Grid item sm={12} xs={12} className="px-2">
              退房Check
              out時間為隔日中午12：00前退房，逾期將視情況收取費用（超過30分鐘加收$500)
            </Grid>
            <Grid item sm={12} xs={12} className="py-3 pl-2 fw-bold">
              <Divider />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6} xs={12}>
          <img src={Pic} alt="訂房說明" className="img" />
        </Grid>
      </Grid>
    </ReservationElement>
  );
}

const ReservationElement = styled.div`
  /*  */
  .title {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 22px;
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
    padding-bottom: 5%;
    @media (max-width: 599px) {
      height: 350px;
    }
  }
  .MuiSvgIcon-root {
    width: 15px;
  }
`;
