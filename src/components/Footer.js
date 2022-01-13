import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import logo from '../assets/niceye-logo.png'
import footer_logo from '../assets/niceye-footer-logo.svg'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'left',
    boxShadow: "none",
    backgroundColor: "#F6F6F6",
    // color: theme.palette.text.secondary,
    color: "#545E72",
    fontSize: "12px",
    fontWeight: "light"
}));
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: "#F6F6F6", p: "3rem" }}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Item sx={{ fontSize: "14px", fontWeight: "regular", pb: 1 }}>Keşfet</Item>
                    <Item>Çözümlerimiz</Item>
                    <Item>Hizmetlerimiz</Item>
                    <Item>Referanslarımız</Item>
                    <Item>Partnerlerimiz</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item sx={{ fontSize: "14px", fontWeight: "regular", pb: 1 }}>Çözümlerimiz</Item>
                    <Item>Sunucu, I&T Çözümleri</Item>
                    <Item>Veritabanı Çözümleri</Item>
                    <Item>Çözüm 3</Item>
                    <Item>Çözüm 4</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item sx={{ fontSize: "14px", fontWeight: "regular", pb: 1 }}>Niceye Hakkında</Item>
                    <Item>Kariyer</Item>
                    <Item>İletişim</Item>
                    <Item>Niceye Hakkında</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item sx={{ fontSize: "14px", fontWeight: "regular", pb: 1 }}>Bizimle İletişime Geçin</Item>
                    <img src={logo} alt="" />
                    <Item>Ortakoy Mahallesi Şair Necati Sokak No:33</Item>
                    <Item>Beşiktaş İstanbul</Item>
                    <Item>Türkiye</Item>
                </Grid>
                <hr style={{ border: "1px solid #545E72", width: "100%" }} />
                <Grid container>
                    <Grid item xs={1}>
                        <Item>Bize Ulaşın</Item>
                    </Grid>
                    <Grid item xs={5.5}>
                        <Item>Kişisel Verilerin Korunmasına Yönelik Aydınlatma ve Gizlilik Politikamız</Item>
                    </Grid>
                    <Grid item xs={5}>
                        <Item>İş Ortaklarımıza Yönelik Aydınlatma Metni ve Gizlilik Politikamız</Item>
                    </Grid>
                    <Grid item xs={6.5}>
                        <Item>Çalışanlarımıza ve Çalışan Adaylarımıza Yönelik Aydınlatma Metni ve Gizlilik Politikamız</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Niceye Çerez Politikası</Item>
                    </Grid>
                    <Grid item>
                        <Img src={footer_logo} alt="footer-logo" />
                        {/* <img src={footer_logo} alt="footer-logo" /> */}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

