import Grid from '@mui/material/Grid';
import { isMobile } from 'react-device-detect';
export default function MainLayout({ children }) {
    return (
        <Grid
            container
            sx={{
                touchAction: 'none',
                alignContent: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            {children}
        </Grid>

    )
}