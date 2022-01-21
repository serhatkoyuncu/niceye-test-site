import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import homeslide1 from '../assets/homeslide1.png';
import homeslide2 from '../assets/homeslide2.png';
import homeslide3 from '../assets/homeslide3.png';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'homeslide1',
        imgPath:homeslide1,
    },
    {
        label: 'Bird',
        imgPath:homeslide2,
    },
    {
        label: 'Bali, Indonesia',
        imgPath:homeslide3,
    },
];

function HomeSlider() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: "50vh",
                                    display: 'block',
                                    maxWidth: "100%",
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step?.imgPath}
                                alt={step?.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
        </Box>
    );
}

export default HomeSlider;

