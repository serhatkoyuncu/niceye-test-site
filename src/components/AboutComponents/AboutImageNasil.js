import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import nasil from '../../assets/AboutAssets/nasil.png';
import misyon from '../../assets/AboutAssets/misyon.png';

export const AboutImageNasil = () => {
    return (
        <Box sx={{ maxWidth: "100%", flexGrow: 1, mb: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={4} sx={{ backgroundColor: "#F2F4F5", }}>
                    <Typography variant="h6" textAlign="end" ml={15} pr={5} sx={{ backgroundColor: "#001E61", color: "#fff", width: "70%" }}>Nasıl Çalışırız?</Typography>
                    <Box
                        component="img"
                        sx={{
                            height: "30vh",
                            display: 'block',
                            maxWidth: "60%",
                            overflow: 'hidden',
                            width: '100%',
                            margin: "20px 20px 20px 200px "
                        }}
                        src={nasil}
                        alt="nasil"
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h4">Nasıl Çalışırız?</Typography>
                    <Typography variant="p" sx={{ lineHeight: 2 }}>
                        Yaratıcı, yenilikçi, takipçi, çözüm odaklı ve müşteri memnuniyetini ilke edinmiş bir ekip anlayışıyla Türk bilişim sektörünün gelişimine katkıda bulunmaktır. <br />
                        İş ortağı anlayışıyla Bilgi Teknolojilerini kullanarak iş çözümleri ve hizmetler sunan Türkiye’nin önde gelen kurumları arasındayız.<br />
                        Müşterimiz ve onların müşterileri olan tüm sosyal paydaşların hedeflerini gözetiriz.<br />
                        Risk paylaşabilen bir iş modeli sunarız. Uzun süreli ve 'kazan-kazan' ilkesine dayanan ilişkiler hedefleriz.<br />
                        Verdiğimiz hizmetlerin iş sonuçlarına yönelik pozitif etkisini taahhüt ederiz.<br />
                        Çözümlerimizin; strateji, insan kaynakları, risk yönetimi, süreç yönetimi gibi bütün boyutlarını ele alırız.<br />
                        Müşterilerimizin kaynaklarını asıl işlerine yöneltmelerini sağlarız.<br />
                        En son teknolojiyi müşterilerimizin hizmetine sunarız.<br />
                        Yaratıcı bakış açımız ve seçkin tasarımlarımızla iş ortaklarımıza artı değer katarız.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} mt={4} ml={8}>
                <Grid item xs={8}>
                    <Typography variant="h4">Misyonumuz</Typography>
                    <Typography variant="p" sx={{ lineHeight: 2 }}>
                        Teknolojik gelişmelerin eğitimli ve uzman bir şekilde takipçisi olup, hizmet kalitesini en üst seviyede tutarak, <br /> güvene dayalı bir ortamda iş ortağı olarak gördüğümüz müşterilerimizin beklenti ve ihtiyaçlarına fayda sağlayan <br /> esnek çözümleri sunup, uygulamak.
                    </Typography>
                    <Typography variant="h4">Vizyonumuz</Typography>
                    <Typography variant="p" sx={{ lineHeight: 2 }}>
                        Teknolojiye olan tutkumuzla sektörde küresel bir saygı ve güven teşkil etmek.
                    </Typography>
                </Grid>
                <Grid item xs={4} sx={{ backgroundColor: "#F2F4F5", }}>
                    <Typography variant="h6" textAlign="start" mr={15} pl={5} sx={{ backgroundColor: "#001E61", color: "#fff", width: "70%" }}>Misyonumuz & Vizyonumuz</Typography>
                    <Box
                        component="img"
                        sx={{
                            height: "30vh",
                            display: 'block',
                            maxWidth: "60%",
                            overflow: 'hidden',
                            width: '100%',
                            margin: "20px 200px 20px 20px "
                        }}
                        src={misyon}
                        alt="nasil"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

