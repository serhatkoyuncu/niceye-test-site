import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ListItem } from '@mui/material';
import HomeCozum from './HomeCozum';
import HomeSunucu from './HomeSunucu';
import HomeVeritabanı from './HomeVeritabanı';
import HomeCozum3 from './HomeCozum3';
import HomeCozum4 from './HomeCozum4';


const data = [
    {
        title: "Çözümlerimiz",
        context: <HomeCozum />,
    },
    {
        title: "Sunucu, I&T Çözümleri",
        context: <HomeSunucu />,
    },
    {
        title: "Veritabanı Çözümleri",
        context: <HomeVeritabanı />,
    },
    {
        title: "Çözüm 3",
        context: <HomeCozum3 />,
    },
    {
        title: "Çözüm 4",
        context: <HomeCozum4 />,
    },
]


export default function HomeInfo() {
    const [cozum, setCozum] = React.useState("Çözümlerimiz");

    const handleChange = (e) => {
        // console.log(e.target.childNodes[0]);
        // console.log(e.currentTarget.childNodes);
        setCozum(e.target.childNodes[0].data)
        // console.log('cozum :>> ', cozum);
    }
    return (
        <Box sx={{ flexGrow: 1,mt:10 }}>
            <Grid container spacing={2}>
                <Grid item xs={3} sx={{ backgroundColor: "#F2F4F5", height: "45vh" }}>
                    {data.map((item) => (
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-end"
                            alignItems="start"
                            pl={9}
                            onClick={handleChange}
                            sx={cozum === item.title ? { backgroundColor: "#001E61", color: "#fff" } : null}
                        >
                            <ListItem sx={{ cursor: "pointer" }}>
                                {item.title}
                            </ListItem>
                        </Grid>
                    ))}
                </Grid>
                {data.map((item) =>
                    <>{cozum === item.title ? item.context : null}</>
                )}
            </Grid>
        </Box>
    );
}

