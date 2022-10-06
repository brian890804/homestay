import { isMobile } from 'react-device-detect';
export default function Title({ children, id }) {
    const Height = isMobile ? 50 : 70
    return (
        <div
            id={id}
            className="g-bc g-center text-white fw-bold fs-2"
            style={{
                height: Height
            }}>
            {children}
        </div>
    )
}