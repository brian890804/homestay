import { useSwiper } from "swiper/react";
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function MoveTop({ show }) {
    const swiper = useSwiper()
    return (
        <IconButton
            className='g-bc'
            style={{
                position: 'absolute',
                bottom: 20,
                right: 20,
                zIndex: 999,
                display: show ? '' : 'none',
                cursor:'pointer',
                color: 'white',
            }}
            size="large"
            onClick={() => swiper.slideTo(0)}
        >
            <ArrowUpwardIcon />
        </IconButton>
    )
}