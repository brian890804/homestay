import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";

import useResize from "../Event/Resize";

export default function FloatIntroduce() {
  const { isMobile } = useResize();
  return <FloatIntroduceElement isMobile={isMobile}>

  </FloatIntroduceElement>;
}

const FloatIntroduceElement = styled.div`
  /*  */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: pink;
`;
