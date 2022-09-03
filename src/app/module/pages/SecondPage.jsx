import { isMobile } from 'react-device-detect';
import Title from "../../../_basic/pages/toolbar/Title"
import styled from "@emotion/styled";
import license from '../../../assets/License/license.png'
import view from '../../../assets/View/view.png'

export default function SecondPage() {
    return (
        <SecondPageElement >
            <Title>新北市合法民宿</Title>
            <div className="row">
                <div className="col-lg-6 col-xs-12  ">
                    <img src={license} className='introduce' alt="logo" />
                </div>
                <div
                    className={`
                    col-lg-6 
                    col-xs-12 
                    text-start 
                    align-self-center
                    fw-bold fs-${isMobile ? 6 : 4}
                    `}>
                    版權所有為生活空間民宿。電話：02-24965628  地址： 新北市瑞芳區九份烏勢巷6號
                    北縣觀光局核准合法民宿編號120號  99年1月12日北府觀管字第0990879564號
                </div>
                <div className="col-12  ">
                    <img src={view} className='introduce' alt="logo" />
                </div>
                <div className="col-12 text-start ">
                    介紹夜景!~~~
                </div>
            </div>
        </SecondPageElement >
    )
}

const SecondPageElement = styled.div`/*  */
    width:100%;
    height:100%;
    .introduce{
        background-repeat:no-repeat;
        width:100%;
        height:auto;
    }
`;