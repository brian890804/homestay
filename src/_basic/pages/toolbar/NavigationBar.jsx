
import { useSwiper } from "swiper/react";
import { isMobile } from 'react-device-detect';
export default function NavigationBar() {
    const swiper = useSwiper()
    const Layout = {
        width: '100%',
        height: isMobile ? 30 : 50,
    }
    const Title = [
        { name: '首頁' },
        { name: '關於我們' },
        { name: '訂房說明' },
        { name: '房型介紹' },
        { name: '交通導引' },
    ]
    return (
        <div className='g-bc ' style={Layout}>
            <div className={`row mx-${isMobile ? 0 : 5} g-center`}
                style={{
                    height: '100%'
                }} >
                <div
                    className='row col-12 text-center '
                    style={{ cursor: 'pointer' }}>
                    {
                        Title.map((data, index) => {
                            return (
                                <div
                                    className='col g-ts-b g-ts-w text-white fw-bold'
                                    onClick={() => swiper.slideTo(index)}
                                    style={{
                                        cursor: 'pointer',
                                        fontSize: isMobile ? '0.8rem' : '1.5rem',
                                    }}
                                    key={index}>
                                    {data.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}