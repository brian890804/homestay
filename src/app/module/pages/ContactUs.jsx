import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";

import Title from "../../../_basic/pages/toolbar/Title";
import Line from "../../../assets/ContactUs/ContactLine.png";
import useResize from "../Event/Resize";

export default function ContactUs() {
  const { isMobile } = useResize();
  return (
    <ContactUsElement isMobile={isMobile}>
      <Title id={"contactUs"}>聯絡我們</Title>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={!isMobile && "py-2 px-5"}
      >
        <Grid item xs={12} sm={6}>
          <ol>
            <li>email:legannon24@gmail.com</li>
            <li>LINE官方帳號 ID:@958fdsep</li>
            <li>WeChat ID:legannon </li>
            <li>電話:0986310045 </li>
            <li>地址:新北勢瑞芳區九份烏勢港6號</li>
            <li>北縣觀光局批准合法民宿編號120號</li>
            <li>99年1月12日北府觀館字第0990879564號</li>
            <li>版權所有為生活空閒民宿。</li>
          </ol>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={Line} alt="九份民宿 九份生活空間民宿 Line 導覽" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </ContactUsElement>
  );
}

const ContactUsElement = styled.div`
  /*  */
  ol {
    list-style: none;
    font-size: 1.2rem;
  }
  li {
    font-size: 1.1rem;
    padding-bottom:0.2em;
  }
`;
