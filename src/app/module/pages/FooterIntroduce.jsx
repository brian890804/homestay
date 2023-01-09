import { useRef } from "react";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import useResize from "../Event/Resize";
import shop1 from "../../../assets/FooterIntroduce/shop-1.png";
import shop2 from "../../../assets/FooterIntroduce/shop-2.png";

export default function FooterIntroduce() {
  const { isMobile } = useResize();
  const imgRef = useRef();

  return (
    <footer>
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
            <header>最佳的手信 </header>
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
          <Grid item xs={7} sm={7}>
            <div
              style={{
                position: "relative",
                paddingBottom: "50%",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                src={shop1}
                loading={"lazy"}
                ref={imgRef}
                alt="九份 九份老街 九份李儀餅店"
              />
            </div>
          </Grid>
          <Grid item xs={5} sm={5}>
            <div
              style={{
                position: "relative",
                paddingBottom: "70%",
              }}
            >
              <img
                src={shop2}
                alt="九份 九份老街旁李儀餅店"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              />
            </div>
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
          <Grid item sm={7} xs={7}>
            <label className="title_purple_block mr-2">&nbsp;</label>
            九份總店
          </Grid>
          <Grid item sm={5} xs={5}>
            <label className="title_purple_block mr-2">&nbsp;</label>
            台北分店
          </Grid>
        </Grid>
        <Grid
          className="fw-bold p-0 mb-2 content_font "
          container
          direction="row"
          justifyContent="start"
          spacing={0}
        >
          <Grid item sm={7} xs={7}>
            <Grid
              className="fw-bold p-0 mb-2 "
              container
              direction="row"
              justifyContent="start"
              spacing={1}
            >
              <Grid item xs={12}>
                九份總店：台北縣瑞芳鎮九份汽車路18號(7-11的對面)
              </Grid>
              <Grid item xs={12} sm={6}>
                訂貨專線：(02)2496-5628
              </Grid>
              <Grid item xs={12} sm={6}>
                手機：0955798018
              </Grid>
              <Grid item xs={12} sm={6}>
                傳真：(02)2406-3045
              </Grid>
              <Grid item xs={12} sm={6}>
                E-mail:lw3in@seed.net.tw
              </Grid>
              <Grid item xs={12} sm={6}>
                營業時間：9:00-17:00
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={5} xs={5}>
            <Grid item xs={12}>
              台北分店：台北市中正區忠孝西路一段50-1號 (Z區地下街No.
              6-3A,Z3出口旁)
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: "1.5%" }}>
              電話：(02)2331-3017
            </Grid>
            <Grid item xs={12} sx={{ paddingTop: "1.5%" }}>
              營業時間：12:00-20:00
            </Grid>
          </Grid>
        </Grid>
      </FooterIntroduceElement>
    </footer>
  );
}

const FooterIntroduceElement = styled.div`
  /*  */
  padding: 4% 5%;
  background-color: #fff8bd;

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
        @media (min-width: 599px) {
          min-width: 15px;
        }
      }
    }
  }

  .content {
    &_font {
      font-size: ${({ isMobile }) => (isMobile ? "0.6rem" : "1.2rem")};
    }
  }
`;
