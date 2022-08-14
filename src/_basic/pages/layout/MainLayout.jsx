import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
export default function MainLayout({ children }) {
    return (
        <Grid
            container
            sx={{
                // backgroundColor: 'pink',
                width: "100vw",
                minHeight: '100vh',
                padding: 2,
                overflow:'auto'
            }}
        >   <Container maxWidth="lg">
                {children}
            </Container>
        </Grid>

    )
}