
import { isMobile } from 'react-device-detect';
export default function NavigationBar() {
    const Layout = { width: '100%', height: 50, backgroundColor: '#7E417A' }
    const Title = [
        { name: '首頁', url: '/main' },
        { name: '關於我們', url: '/about' },
        { name: '訂房說明', url: '/caption' },
        { name: '房型介紹', url: '/roomtype' },
        { name: '交通導引', url: '/traffic' },
    ]
    return (
        <div style={Layout}>
            <div className={`row mx-${isMobile ? 0 : 5}`}
                style={{
                    alignContent: 'center',
                    justifyContent: 'center',
                    height: '100%'
                }} >
                <div
                    className='row col-12 text-center'
                    style={{ cursor: 'pointer' }}>
                    {
                        Title.map((data, index) => {
                            return (
                                <div
                                    style={{
                                        fontSize: isMobile ? '0.8rem' : '1.5rem',
                                        textShadow: ' 0px 0px 2px white',
                                    }}
                                    className='col text-white fw-bolder'
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