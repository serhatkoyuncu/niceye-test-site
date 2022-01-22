import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { List, ListItem, Typography } from '@mui/material';
import HomeImageList from './HomeImageList';
const data = [
    {
        title: "Çözümlerimiz",
        context: "",
    },
    {
        title: "Sunucu, I&T Çözümleri",
        context: "",
    },
    {
        title: "Veritabanı Çözümleri",
        context: "",
    },
    {
        title: "Çözüm 3",
        context: "",
    },
    {
        title: "Çözüm 4",
        context: "",
    },
]


export default function HomeInfo() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={3} sx={{ backgroundColor: "#F2F4F5" }}>
                    {data.map((item) => (
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-end"
                            alignItems="start"
                            pl={9}
                            onClick={() => console.log("deneme")}
                            sx={{ cursor: "pointer", }}
                        >
                            <ListItem>
                                {item.title}
                            </ListItem>
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h5">Hizmetlerimiz & Çözümlerimiz</Typography>
                    <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tellus nisi, consectetur et mauris a, fermentum ornare urna.</Typography>
                    <List>
                        <Grid container>
                            <Grid item xs={4}>
                                <ListItem>BT Servis Hizmeti</ListItem>
                                <ListItem>Yardım Masası</ListItem>
                                <ListItem>Uygulama Desteği</ListItem>
                                <ListItem>Veri Tabanı Yönetimi</ListItem>
                                <ListItem>Microsoft Kurumsal Hizmetler</ListItem>
                                <ListItem>IT Altyapı Kurulumu</ListItem>
                                <ListItem>Sunucu Kurulumu ve Yönetimi</ListItem>
                                <ListItem>Network Altyapı Kurulumu</ListItem>
                            </Grid>
                            <Grid item xs={4}>
                                <ListItem>İş Sürekliliği ve Felaket Kurtarma</ListItem>
                                <ListItem>Sanallaştırma ve Konsolidasyon</ListItem>
                                <ListItem>Yedekleme ve Replikasyon</ListItem>
                                <ListItem>SAN Veri Depolama ve Yedekleme Çözümleri</ListItem>
                                <ListItem>Sistem Odası Altyapı Kurulumu ve Düzenlemesi</ListItem>
                                <ListItem>Bilgi Güvenliği</ListItem>
                                <ListItem>Donanım Teknoloji Danışmanlığı</ListItem>
                                <ListItem>IP Telefon</ListItem>
                            </Grid>
                            <Grid item xs={4}>
                                <ListItem>Live Agent</ListItem>
                                <ListItem>Video Konferans & Telepresence</ListItem>
                                <ListItem>Yardım Masası/Çağrı Merkezi Kurulumu</ListItem>
                                <ListItem>KIOSK & Digital Signage & InfoPoint</ListItem>
                                <ListItem>Aprego Restoran Otomasyonu</ListItem>
                                <ListItem>Uzaktan Veritabanı Yönetimi</ListItem>
                                <ListItem>Sunucu Kurulumu ve Yönetimi</ListItem>
                                <ListItem>Network Altyapı Kurulumu</ListItem>
                            </Grid>
                        </Grid>
                    </List>
                </Grid>
                <Grid item xs={7}>
                    <HomeImageList/>
                </Grid>
                <Grid item xs={5}>
                    <Grid
                        container
                        justifyContent="flex-start"
                        alignItems="start"
                        pl={4}
                        sx={{ cursor: "pointer", backgroundColor: "#F2F4F5", height:"200px",pt:2 }}
                    >
                        <Grid item xs={12}>
                            <ListItem>Partnerlerimiz</ListItem>
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
        </Box>
    );
}

