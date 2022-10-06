import Title from "../../../_basic/pages/toolbar/Title"
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Pic from '../../../assets/Reservation/Pic1.png'
export default function Reservation() {
    return (
        <ReservationElement>
            <Title id="reservation">訂房說明</Title>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item sm={6}>
                    A
                </Grid>
                <Grid item sm={6}>
                    <img src={Pic} alt="訂房說明" className="img" />
                </Grid>
            </Grid>
        </ReservationElement>
    )
}

const ReservationElement = styled.div`/*  */
.img{
    width:100%;
    padding-bottom:5%;
}
`
