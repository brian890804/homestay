import useResize from '../../../app/module/Event/Resize';
export default function Title({ children, id }) {
    const {isMobile}=useResize();
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