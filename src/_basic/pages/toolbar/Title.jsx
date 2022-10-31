import useResize from '../../../app/module/Event/Resize';
export default function Title({ children, id }) {
    const {isMobile}=useResize();
    const Height = isMobile ? 40 : 70
    return (
        <div
            id={id}
            className="g-bc g-center text-white fw-bold "
            style={{
                height: Height,
                fontSize:isMobile?'1rem':'2rem'
            }}>
            {children}
        </div>
    )
}