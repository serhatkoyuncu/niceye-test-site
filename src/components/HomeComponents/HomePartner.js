import { Grid, ListItem } from '@mui/material';
import React from 'react';
import HomeImageList from './HomeImageList';

function HomePartner() {
    return (
        <Grid container mt={5}>
            <Grid item xs={7}>
                <HomeImageList />
            </Grid>
            <Grid item xs={5}>
                <Grid
                    container
                    justifyContent="flex-start"
                    alignItems="start"
                    pl={4}
                    sx={{ backgroundColor: "#F2F4F5", height: "200px", pt: 2 }}
                >
                    <Grid item xs={10}>
                        <ListItem sx={{ backgroundColor: "#001E61", color: "#fff" }}>Partnerlerimiz</ListItem>
                    </Grid>
                    <Grid item xs={6}>
                        <ListItem>HP</ListItem>
                        <ListItem>Intel</ListItem>
                        <ListItem>Cisco</ListItem>
                    </Grid>
                    <Grid item xs={6}>
                        <ListItem>Microsoft</ListItem>
                        <ListItem>Ofisim Her Yerde</ListItem>
                        <ListItem>Virtuatic</ListItem>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default HomePartner;
