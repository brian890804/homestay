import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import useResize from "../Event/Resize";
import shop1 from "../../../assets/FooterIntroduce/shop-1.png";
import shop2 from "../../../assets/FooterIntroduce/shop-2.png";

export default function FooterIntroduce() {
  const { isMobile } = useResize();
  return (
    <FooterIntroduceElement isMobile={isMobile}>
      <Grid
        className="text-start fw-bold p-0 mb-2 g-bc"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          className="g-ts-w"
          style={{
            fontSize: isMobile ? "1rem" : "2rem",
            color: "white",
            padding: isMobile ? "0px 10px" : "0px 20px",
          }}
        >
          最佳的手信
        </Grid>
        <Grid
          item
          sm
          xs
          className="g-ts-b mb-1"
          style={{
            lineHeight: isMobile ? 2 : 3.2,
            backgroundColor: "#fff8bd",
          }}
        >
          &nbsp;
        </Grid>
      </Grid>
      <Grid
        className="fw-bold p-0 mb-2"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={6} sm={6}>
          <img src={shop1} alt="九份李儀餅店" />
        </Grid>
        <Grid item xs={6} sm={6}>
          <img src={shop2} alt="李儀餅店" />
        </Grid>
      </Grid>
      <Grid
        className="fw-bold p-0 mb-2 title_font g-ts-p"
        container
        direction="row"
        justifyContent="start"
        alignItems="center"
        spacing={1}
      >
        <Grid item sm={6} xs={6}>
          <label className="title_purple_block mr-2">&nbsp;</label>
          九份總店
        </Grid>
        <Grid item sm={6} xs={6}>
          <label className="title_purple_block mr-2">&nbsp;</label>
          台北分店
        </Grid>
      </Grid>
      <Grid
        className="fw-bold p-0 mb-2 content_font "
        container
        direction="row"
        justifyContent="start"
        alignItems=""
        spacing={1}
      >
        <Grid item sm={6} xs={6}>
          <li>
            <ol>九份總店：台北縣瑞芳鎮九份汽車路18號(7-11的對面)</ol>
            <ol>訂貨專線：(02)2496-5628 手機：0955798018</ol>
            <ol>傳真：(02)2406-3045 E-mail:lw3in@seed.net.tw</ol>
            <ol>營業時間：9:00-17:00</ol>
          </li>
        </Grid>
        <Grid item sm={6} xs={6}>
        <li>
            <ol>台北分店：台北市中正區忠孝西路一段50-1號</ol>
            <ol>(Z區地下街No. 6-3A, Z3出口旁</ol>
            <ol>電話：(02)2331-3017 營業時間：12:00-20:00</ol>
          </li>
        </Grid>
      </Grid>
    </FooterIntroduceElement>
  );
}

const FooterIntroduceElement = styled.div`
  /*  */
  padding: 4% 5%;
  background-color: #fff8bd;

  li {
    list-style: none;
    margin-top: 2%;
  }

  ol {
    padding: 0;
    font-size: ${({ isMobile }) => (isMobile ? "0.5rem" : "1.2rem")};
  }

  img {
    width: 100%;
  }

  .title {
    &_font {
      font-size: ${({ isMobile }) => (isMobile ? "1rem" : "2rem")};
      color: #986795;
    }
    &_purple {
      &_block {
        min-width: 8px;
        background-color: #986795;
        @media(min-width:599px){
          min-width: 15px;
        }
      }
    }
  }

  .content{
    &_font{
      font-size: ${({ isMobile }) => (isMobile ? "0.8rem" : "1.6rem")};
    }
  }
`;
