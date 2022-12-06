import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import useResize from "../../Event/Resize";
import Introduce1 from "../../../../assets/Introduce/Introduce1.png";
import Introduce2 from "../../../../assets/Introduce/Introduce2.png";
export default function Introduce() {
  return (
    <>
      <Title />
      <Content />
    </>
  );
}
function Title() {
  const { isMobile } = useResize();
  return (
    <div className={`fs-${isMobile ? 6 : 2} mt-5 mx-${isMobile ? 3 : 3} `}>
      <Grid
        className="text-start fw-bold  mb-2 g-bc"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ whiteSpace: "nowrap" }}
      >
        <Grid
          item
          sm={3}
          xs={3}
          className="g-ts-w"
          style={{
            fontSize: "1em",
            color: "white",
            padding: isMobile ? "1px 10px" : "3px 20px",
            maxWidth: "40%",
          }}
        >
          十步路到老街
        </Grid>
        <Grid
          item
          sm
          xs
          className="g-ts-b mb-1"
          style={{
            fontSize: isMobile ? "0.6em" : "1em",
            lineHeight: isMobile ? 2.2 : 1.5,
            backgroundColor: "#fff",
            padding: isMobile ? "1px 10px" : "3px 0px",
          }}
        >
          &nbsp; 鬧中取靜，隱身於老街巷內中!
        </Grid>
      </Grid>
      <div
        style={{
          wordBreak: "break-word",
          fontSize: isMobile ? "0.6em" : "0.9em",
          lineHeight: isMobile ? 2 : 1.4,
        }}
        className={`col-12 text-start fw-bolder p-0 my-1 `}
      >
        生活空間民宿坐落在九份老街中心地段，位處於繁華熱鬧商圈巷弄內,
        出門即到老街!在喧囂中為您提供舒適恬靜的休憩空間。
        生活空間擁有多種时尚摩登、山海景觀套房,
        全新裝潢,品味獨具，衷心期待您的光臨，感受九份獨具的魅力所在。
        體驗生活空間帶給您前所未有的住宿休閒新享受。頂樓露臺超大景寬與桌椅可一望無際整個九份風景!
      </div>
    </div>
  );
}
function Content() {
  let Introduces = [Introduce2, Introduce1];
  return (
    <ContentElement className="row pb-1">
      {Introduces.map((data, index) => (
        <div className="col-6 " key={index}>
          <img src={data} alt={`Introduce${index}`}loading={"lazy"} />
        </div>
      ))}
    </ContentElement>
  );
}
const ContentElement = styled.div`
  /*  */
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
