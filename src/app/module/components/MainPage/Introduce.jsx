import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { isMobile } from 'react-device-detect';
import Introduce1 from '../../../../assets/Introduce/Introduce1.png'
import Introduce2 from '../../../../assets/Introduce/Introduce2.png'
export default function Introduce() {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}
function Title() {
    return (
        <div className={`fs-${isMobile ? 5 : 2} row  mx-0 mb-2`}>
            <div className='col-12  text-start fw-bold p-0 mb-2'
                style={{
                    fontSize: '0.9em',
                    borderBottomColor: '#7E417A',
                    borderBottomWidth: 5,
                    borderBottomStyle: 'solid',
                }}>
                <label
                    style={{
                        color: 'white',
                        backgroundColor: '#7E417A',
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop:5
                    }}>
                    十步路到老街
                </label>
                <label> &nbsp;鬧中取靜，隱身於老街巷內中!</label>
            </div>
            <div
                style={{
                    wordBreak: 'break-word',
                    fontSize: isMobile ? '0.6em' : '0.9em',
                    lineHeight: isMobile ? 2 : 1.4
                }}
                className={`col-12 text-start fw-bolder p-0 my-1`}
            >
                生活空间民宿坐落在九份老街中心地段，位處於繁華熱鬧商圈巷弄內,
                出門即到老街!在喧囂中為您提供舒適恬靜的休憩空間。
                生活空間擁有多種时尚摩登、山海景觀套房,
                全新裝潢,品味獨具，衷心期待您的光臨，感受九份獨具的魅力所在。
                體驗生活空間帶給您前所未有的住宿休閒新享受。頂樓露臺超大景寬與桌椅可一望無際整個九份風景!
            </div>
        </div>
    )
}
function Content() {
    let Introduces = [Introduce1, Introduce2]
    return (
        <div className="row" style={{ height: '100%' }}>
            {
                Introduces.map((data, index) =>
                    <div className="col p-0">
                        <img
                            src={data}
                            alt={`Introduce${index}`}
                            style={{ height: '100%' }} />
                    </div>
                )
            }
        </div>
    )
}