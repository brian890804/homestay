import Logo from '../../../../assets/Logo/Logo.jpg'
export default function Title() {
    const TitleWidth = 50
    return (
        <div
            className='fs-1  align-items-center justify-content-center '
            style={{
                display: 'flex',
                height: TitleWidth,
                fontWeight: '800',
                textShadow: ' 0px 0px 0.8px black'
            }}>
            <img
                src={Logo}
                alt='logo'
                style={{
                    maxWidth: TitleWidth - 10,
                    maxHeight: TitleWidth - 10,
                    marginRight: 20
                }} />
            九份生活空間民宿
        </div>
    )
}