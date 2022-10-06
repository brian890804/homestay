import { Grid } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import styled from "@emotion/styled";

import PhoneIcon from '@mui/icons-material/LocalPhone';
import LetterIcon from '@mui/icons-material/Email';
import ShareIcon from '@mui/icons-material/Share';

import Title from "../../../_basic/pages/toolbar/Title"
import Pic from '../../../assets/Reservation/Pic1.png'

export default function Reservation() {
    let Icons = [
        { source: PhoneIcon, onClick: () => "" },
        { source: LetterIcon, onClick: () => "" },
        { source: ShareIcon, onClick: () => "" }

    ]
    return (
        <ReservationElement>
            <Title id="reservation">訂房說明</Title>
            <Grid
                container
                direction="row"
                justifyContent="center"
                spacing={2}
            >
                <Grid item sm={6}>
                    <div className="title mt-2 mx-2">
                        <div >
                            【住房時間】
                        </div>
                        <div className="title">
                            {
                                Icons.map((icon, index) =>
                                    <IconButton
                                        key={index}
                                        className="icon_button mr-2 mt-1" >
                                        <icon.source />
                                    </IconButton >)
                            }
                        </div>
                    </div >
                </Grid>
                <Grid item sm={6}>
                    <img src={Pic} alt="訂房說明" className="img" />
                </Grid>
            </Grid>

        </ReservationElement >
    )
}

const ReservationElement = styled.div`/*  */
.title{
    display: flex;
    justify-content:space-between;
    font-weight:bold;
    font-size:22px;
}
.icon_button{
    border-style: double;
    border:1px solid;
    margin-right:5px;
    width:25px;
    height:25px;
}
.img{
    width:100%;
    padding-bottom:5%;
}
.MuiSvgIcon-root{
   width:15px;
}
`
