import { useSwiper } from "swiper/react";
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function MoveTop({ show }) {
    const swiper = useSwiper()
    return (
        <IconButton
            className='g-bc'
            style={{
                position: 'fixed',
                bottom: '5%',
                right:'2%',
                zIndex: 999,
                display: show ? '' : 'none',
                cursor: 'pointer',
                color: 'white',
            }}
            size="large"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <ArrowUpwardIcon />
        </IconButton>
    )
}