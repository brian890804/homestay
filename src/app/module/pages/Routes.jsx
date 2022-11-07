import {useState} from 'react';
import MainPage from "./MainPage";
import LegalHomeStay from "./LegalHomeStay";
import RoomIntroduce from "./RoomIntroduce";
import Reservation from "./Reservation";
import Traffic from "./Traffic";
import EffectBox from "../../../_basic/pages/block/EffectBox";
import ContactUs from "./ContactUs";
import FooterIntroduce from "./FooterIntroduce";
import { Backdrop } from "@mui/material";
export default function Routes({ show }) {
const [bgOpen,setBgOpen]=useState(false);
  return (
    <>
      <EffectBox show={show} setBgOpen={setBgOpen}/>
      <Backdrop open={bgOpen} sx={{zIndex:100}} />
      <MainPage />
      <LegalHomeStay />
      <RoomIntroduce />
      <Reservation />
      <Traffic />
      <ContactUs />
      <FooterIntroduce />
    </>
  );
}
