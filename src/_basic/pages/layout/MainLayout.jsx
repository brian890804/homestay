import Grid from '@mui/material/Grid';
import { isMobile } from 'react-device-detect';
export default function MainLayout({ children }) {
    return (
        <Grid
            container
            sx={{
                width: "100vw",
                height: '100vh',
                overflowX: 'auto',
                paddingLeft: !isMobile ? '10%' : 0,
                paddingRight: !isMobile ? '10%' : 0
            }}
        >
            {children}
        </Grid>

    )
}