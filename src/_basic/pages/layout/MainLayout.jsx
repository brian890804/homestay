import Grid from '@mui/material/Grid';
import { isMobile } from 'react-device-detect';
export default function MainLayout({ children }) {
    return (
        <Grid
            container
            sx={{
                height: '100vh',
                overflowX: 'auto',
                touchAction: 'none',
                alignContent: 'center',
                maxWidth: 1200,
                minWidth: isMobile ? '100vw' : 800
            }}
        >
            {children}
        </Grid>

    )
}