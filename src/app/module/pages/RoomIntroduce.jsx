import React from 'react'
import styled from "@emotion/styled";
import { Grid } from '@mui/material';
import Title from '../../../_basic/pages/toolbar/Title'
import MuiCard from '../components/MuiCard';
import Room1 from '../../../assets/Room/Room1.png'
import Room2 from '../../../assets/Room/Room2.png'
import Room6 from '../../../assets/Room/Room6.png'
import Room7 from '../../../assets/Room/Room7.png'
import Room8 from '../../../assets/Room/Room8.png'
import Balcony from '../../../assets/Room/Balcony.png'

export default function ThirdPage() {
    let HouseImgItems = [
        { img: Room1, description: "位於2樓左手邊，客房裝潢以日式和風為基調，14.5平米超大空間，適合居家聊天歇憩。", name: '日式典藏和風客房－大客廳' },
        { img: Room2, description: "位於3樓左手邊，客房裝潢以海洋空間為基調，13平米超大空間，躺在床上即可盡收一望無際海景。", name: '景觀海洋風格客房-超大景緻陽台' },
        { img: Room6, description: "位於3樓左手邊，客房裝潢以舒適摩登為基調，9.5平米超大空間，風景宜人舒適吊床。", name: '雅致舒適客房-搖搖吊床與陽台' },
        { img: Room7, description: "位於2樓右手邊，客房裝潢以異國流行為基調，9.5平米大空間，溫馨舒適。", name: '異國風情時尚客房-窗邊椅' },
        { img: Room8, description: "位於1樓入口處，客房裝潢以摩登時尚為基調，10平米大空間，溫馨舒適。", name: '經典溫馨客房－大陽台' },
        { img: Balcony, description: "位於4樓頂樓，可盡收一望無際夜景。", name: '頂樓公共空間星空露臺' },

    ]
    return (
        <ThirdPageElement>
            <Title id="roomIntroduce">房型介紹</Title>
            <div className='content'>
                <Grid
                    container
                    direction="row"
                    spacing={2}
                >
                    {
                        HouseImgItems.map(item =>
                            <Grid item sm={6} xs={6} key={item.name}>
                                <MuiCard item={item} />
                            </Grid>)
                    }
                </Grid>
            </div>
        </ThirdPageElement>
    )
}

const ThirdPageElement = styled.div`/*  */
    width:100%;
    height:100%;
    .content{
        padding:1%;
        height: 100%;
    }
`;