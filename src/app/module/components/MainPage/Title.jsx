import Logo from '../../../../assets/Logo/Logo.jpg'
export default function Title() {
    return (
        <div
            className='fs-1  align-items-center justify-content-center '
            style={{
                display: 'flex',
                height: 100,
                fontWeight: '800',
                textShadow: ' 0px 0px 0.8px black'
            }}>
            <img src={Logo} alt='logo' style={{ maxWidth: 80, maxHeight: 80 }} />
            九份生活空間民宿
        </div>
    )
}