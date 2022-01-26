import { Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bgimage from '../../assets/AboutAssets/bgimage.png';
;


export const AboutTop = () => {
    return (
        <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
            <Box
                component="img"
                sx={{
                    height: "60vh",
                    display: 'block',
                    maxWidth: "100%",
                    overflow: 'hidden',
                    width: '100%',
                }}
                src={bgimage}
                alt="bgimage"
            />
            <Box
                component="div"
                sx={{
                    height: "100%",
                    display: 'block',
                    maxWidth: "100%",
                    overflow: 'hidden',
                    width: '100%',
                    backgroundColor: "#F2F4F5",
                    pt: 1,
                    mb: 10,
                }}>
                <Grid container spacing={2}>
                    <Grid item xs={2} ml={7} mb={1}>
                        <Link sx={{textDecoration:"none",cursor:"pointer"}} onClick={()=>window.scrollTo(0,700)}>
                            <Typography variant="h4">01</Typography>
                            <Typography variant="p">Nasıl Çalışırız?</Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link sx={{textDecoration:"none",cursor:"pointer"}} onClick={()=>window.scrollTo(0,920)}>
                            <Typography variant="h4">02</Typography>
                            <Typography variant="p">Misyonumuz & Vizyonumuz</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
