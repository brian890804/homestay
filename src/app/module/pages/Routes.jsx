import React, { useState, lazy } from "react";
import MainPage from "./MainPage";
import EffectBox from "../../../_basic/pages/block/EffectBox";

import { Backdrop } from "@mui/material";
const LegalHomeStay = lazy(() => import("./LegalHomeStay"));
const RoomIntroduce = lazy(() => import("./RoomIntroduce"));
const Reservation = lazy(() => import("./Reservation"));
const Traffic = lazy(() => import("./Traffic"));
const ContactUs = lazy(() => import("./ContactUs"));
const FooterIntroduce = lazy(() => import("./FooterIntroduce"));
export default function Routes({ show }) {
  const [bgOpen, setBgOpen] = useState(false);
  return (
    <React.Fragment>
      <section>
        <EffectBox show={show} setBgOpen={setBgOpen} />
        <Backdrop open={bgOpen && show} sx={{ zIndex: 100 }} />
        <MainPage />
        <LegalHomeStay />
        <RoomIntroduce />
        <Reservation />
        <Traffic />
        <ContactUs />
        <FooterIntroduce />
      </section>
    </React.Fragment>
  );
}
