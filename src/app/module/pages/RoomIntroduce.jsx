import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

import useResize from "../Event/Resize";
import Title from "../../../_basic/pages/toolbar/Title";
import MuiCard from "../components/RoomIntroduce/MuiCard";
import Room1 from "../../../assets/Room/Room1.png";
import Room2 from "../../../assets/Room/Room2.png";
import Room6 from "../../../assets/Room/Room6.png";
import Room7 from "../../../assets/Room/Room7.png";
import Room8 from "../../../assets/Room/Room8.png";

import Room8_1 from "../../../assets/Room/Room8Introduce/Room8-1.png";
import Room8_2 from "../../../assets/Room/Room8Introduce/Room8-2.png";
import Room8_3 from "../../../assets/Room/Room8Introduce/Room8-3.png";
import Room8_4 from "../../../assets/Room/Room8Introduce/Room8-4.png";

import Balcony from "../../../assets/Room/Balcony.png";

import Room1_1 from "../../../assets/Room/Room1Introduce/Room1-1.png";
import Room1_2 from "../../../assets/Room/Room1Introduce/Room1-2.png";
import Room1_3 from "../../../assets/Room/Room1Introduce/Room1-3.png";
import Room1_4 from "../../../assets/Room/Room1Introduce/Room1-4.png";
import Room1_5 from "../../../assets/Room/Room1Introduce/Room1-5.png";
import Room1_6 from "../../../assets/Room/Room1Introduce/Room1-6.png";
import Room1_7 from "../../../assets/Room/Room1Introduce/Room1-7.png";
import Room1_8 from "../../../assets/Room/Room1Introduce/Room1-8.png";
import Room1_9 from "../../../assets/Room/Room1Introduce/Room1-9.png";
import Room1_10 from "../../../assets/Room/Room1Introduce/Room1-10.png";

import Room7_1 from "../../../assets/Room/Room7Introduce/Room7-1.png";
import Room7_2 from "../../../assets/Room/Room7Introduce/Room7-2.png";
import Room7_3 from "../../../assets/Room/Room7Introduce/Room7-3.png";
import Room7_4 from "../../../assets/Room/Room7Introduce/Room7-4.png";
import Room7_5 from "../../../assets/Room/Room7Introduce/Room7-5.png";
import Room7_6 from "../../../assets/Room/Room7Introduce/Room7-6.png";
import Room7_7 from "../../../assets/Room/Room7Introduce/Room7-7.png";

import Room6_1 from "../../../assets/Room/Room6Introduce/Room6-1.png";
import Room6_2 from "../../../assets/Room/Room6Introduce/Room6-2.png";
import Room6_3 from "../../../assets/Room/Room6Introduce/Room6-3.png";
import Room6_4 from "../../../assets/Room/Room6Introduce/Room6-4.png";
import Room6_5 from "../../../assets/Room/Room6Introduce/Room6-5.png";
import Room6_6 from "../../../assets/Room/Room6Introduce/Room6-6.png";

import Room2_1 from "../../../assets/Room/Room2Introduce/Room2-1.png";
import Room2_2 from "../../../assets/Room/Room2Introduce/Room2-2.png";
import Room2_3 from "../../../assets/Room/Room2Introduce/Room2-3.png";
import Room2_4 from "../../../assets/Room/Room2Introduce/Room2-4.png";
import Room2_5 from "../../../assets/Room/Room2Introduce/Room2-5.png";

import Balcony_1 from "../../../assets/Room/Balcony/Balcony-1.png";
import Balcony_2 from "../../../assets/Room/Balcony/Balcony-2.png";
import Balcony_3 from "../../../assets/Room/Balcony/Balcony-3.png";

const All = Array(14)
  .join(",")
  .split(",")
  .map((_, index) => {
    return index;
  });
let HouseImgItems = [
  {
    img: Room8,
    description:
      "位於1樓入口處，客房裝潢以摩登時尚為基調，10平米大空間，溫馨舒適。(可加床>1人)",
    name: "溫馨時光雙人房-附露臺",
    introduce: {
      imgItems: [Room8_1, Room8_2, Room8_3, Room8_4],
      title: "經典溫馨客房-大陽台",
      option: All,
      text: (
        <li>
          <ol>加床說明:</ol>
          <ol>此床型加床為沙發椅攤平,尺寸為 200cm* ??cm</ol>
          <ol>加床費用為$500,此房最多加1人</ol>
        </li>
      ),
    },
  },
  {
    img: Room1,
    description:
      "位於2樓左手邊，客房裝潢以日式和風為基調，14.5平米超大空間，適合居家聊天歇憩。(可加床>4人)",
    name: "日式典藏雙人房",
    introduce: {
      imgItems: [
        Room1_1,
        Room1_2,
        Room1_3,
        Room1_4,
        Room1_5,
        Room1_6,
        Room1_7,
        Room1_8,
        Room1_9,
        Room1_10,
      ],
      title: "日式典藏和風客房-大客廳",
      option: All,
      text: (
        <li>
          <ol>加床說明:</ol>
          <ol>此床型加床為沙發椅攤平,尺寸為 200cm* ??cm</ol>
          <ol>加床費用為$500,此房最多加4人</ol>
        </li>
      ),
    },
  },
  {
    img: Room7,
    description:
      "位於2樓右手邊，客房裝潢以異國流行為基調，9.5平米大空間，溫馨舒適。(可加床>1人)",
    name: "異國風情雙人房",
    introduce: {
      imgItems: [Room7_1, Room7_2, Room7_3, Room7_4, Room7_5, Room7_6, Room7_7],
      title: "異國風情雙人房",
      option: All,
      text: (
        <li>
          <ol>加床說明:</ol>
          <ol>此床型加床為沙發椅攤平,尺寸為 200cm* ??cm</ol>
          <ol>加床費用為$500,此房最多加1人</ol>
        </li>
      ),
    },
  },
  {
    img: Room6,
    description:
      "位於3樓，客房裝潢以舒適摩登為基調，9.5平米大空間，風景宜人舒適吊床。",
    name: "雅致舒適雙人房-附陽台",
    introduce: {
      imgItems: [Room6_1, Room6_2, Room6_3, Room6_4, Room6_5, Room6_6],
      title: "雅致舒適雙人房-附陽台",
      option: All,
      text: <li></li>,
    },
  },
  {
    img: Room2,
    description:
      "位於3樓，客房裝潢以海洋空間為基調，13平米超大空間，躺在床上即可盡收一望無際海景。",
    name: "異國風情雙人房-附陽台",
    introduce: {
      imgItems: [Room2_1, Room2_2, Room2_3, Room2_4, Room2_5],
      title: "異國風情雙人房-附陽台",
      option: All,
      text: <li></li>,
    },
  },
  {
    img: Balcony,
    description: "位於4樓頂樓，可盡收一望無際夜景。",
    name: "頂樓公共空間星空露臺",
    introduce: {
      imgItems: [Balcony_1, Balcony_2, Balcony_3],
      title: "頂樓公共空間星空露臺",
      option: All,
      text: (
        <li>
          <ol>其他說明:上頂樓前須於3F入口處更換室外拖鞋!</ol>
        </li>
      ),
    },
  },
];
export default function ThirdPage() {
  const { isMobile } = useResize();

  return (
    <ThirdPageElement>
      <Title id="roomIntroduce">房型介紹</Title>
      <div className="content">
        <Grid container direction="row" spacing={isMobile ? 1 : 2}>
          {HouseImgItems.map((item) => (
            <Grid item sm={6} xs={6} key={item.name}>
              <MuiCard item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </ThirdPageElement>
  );
}

const ThirdPageElement = styled.div`
  /*  */
  width: 100%;
  height: 100%;
  .content {
    padding: 1%;
    height: 100%;
  }
`;
