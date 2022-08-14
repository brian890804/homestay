
export default function NavigationBar() {
    const Layout = { width: '100%', height: 60, backgroundColor: '#7E417A' }
    const Title = [
        { name: '首頁', url: '/main' },
        { name: '關於我們', url: '/about' },
        { name: '訂房說明', url: '/caption' },
        { name: '房型介紹', url: '/roomtype' },
        { name: '交通導引', url: '/traffic' },
    ]
    return (
        <div style={Layout}>
            <div className='row '
                style={{
                    alignContent: 'center',
                    justifyContent: 'center',
                    height: '100%'
                }} >
                <div
                    className='col-12 text-center row fs-5'
                    style={{ cursor: 'pointer' }}>
                    {
                        Title.map((data, index) => {
                            return (
                                <div
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