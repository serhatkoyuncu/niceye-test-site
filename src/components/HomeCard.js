import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import fiber from '../assets/fiber.png';
import application from '../assets/application.png';
import icon from '../assets/icon.png';
import onlineconference from '../assets/online-conference.png';

const cards = [
    {
        index: 1,
        image: fiber,
        title: "BT Servis Hizmeti",
        subtitle: "Müşterilerimize global standartlarda verdiğimiz BT Altyapı ve Kullanıcı Servis Hizmeti ile onların işlerine odaklanmasını, enerjilerini kendi sektörlerine harcamalarını sağlarız."
    },
    {
        index: 2,
        image: application,
        title: "Uygulama Desteği",
        subtitle: "Son Kullanıcı Destek Hizmetimiz kapsamında, müşterilerimizin sürekli kullandıkları uygulamaların ya da yazılım projelerine, alanında tecrübeli ekipler ile destek vermekteyiz."
    },
    {
        index: 3,
        image: icon,
        title: "Bilgi Güvenliği",
        subtitle: "Neredeyse küresel hale gelmiş dünya çapındaki bilişim suçlarının, bu faktörlerden kar elde etme yönündeki kararlılıkları, bilgi güvenliği vakalarını kaçınılmaz hale getirmektedir."
    },
    {
        index: 4,
        image: onlineconference,
        title: "Sanallaştırma",
        subtitle: "Günümüz teknoloji ve şartlarında sanallaştırmanın önemini iyi bilen, bu çözümü Türkiye'de kendi yapısında ilk kullanan ve çözüm olarak sunan teknoloji kurumlarından biri."
    },
]

export default function HomeCard() {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card sx={{ backgroundColor: "#001E61", color: "#fff", height: "100%", margin: "3rem 10rem", borderRadius: 3 }}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} m="2rem">
                    {cards.map((card) => (
                        <Grid item xs={3}>
                            <React.Fragment>
                                <CardContent sx={card.index===cards.length ? {} : { borderRight: "1px solid white"}}>
                                    <img src={card.image} alt="fiber" width="30vw" height="30vh"/>
                                    <Typography variant="h6" component="div"m="0.5rem auto 1rem">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" height="20vh">
                                        {card.subtitle}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Daha fazla</Button>
                                </CardActions>
                            </React.Fragment>
                        </Grid>
                    ))}
                </Grid>
            </Card>
        </Box>
    );
}
