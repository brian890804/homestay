import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import useResize from "../Event/Resize";

export default function FooterIntroduce() {
  const { isMobile } = useResize();
  return <FooterIntroduceElement isMobile={isMobile}>sf</FooterIntroduceElement>;
}

const FooterIntroduceElement = styled.div`
  /*  */
  background-color:#FFF8BD;
`;
