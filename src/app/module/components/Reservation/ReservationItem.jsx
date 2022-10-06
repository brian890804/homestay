import { Grid } from "@mui/material";

export default function ReservationItem() {
    reutrn(
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <Grid item sm={6}></Grid>
            <Grid item sm={6}></Grid>
        </Grid>
    )
}