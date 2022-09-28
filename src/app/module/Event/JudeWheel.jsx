import { useEffect,useCallback } from 'react';

export default function JudeWheel(set) {
    const onScrollBottom = useCallback(() => {
        if (window.scrollY > (window.innerHeight / 2)) {
            set(true)
        } else {
            set(false)
        }
    })
    useEffect(() => {
        window.addEventListener('scroll', onScrollBottom);
        return (() => { window.removeEventListener('scroll', onScrollBottom) })
    }, [])
}