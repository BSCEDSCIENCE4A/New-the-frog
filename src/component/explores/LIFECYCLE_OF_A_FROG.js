import React from 'react'
import { Grid, Typography, Card, IconButton} from '@mui/material'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
} from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import frogCycle from '../images/unknown.png'

const classes = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '10vw',
        minHeight: '100vh',
        backgroundColor: '#3f3f3f'
    },
    myCard: {
        maxWidth: '90vw',
        minHeight: '100vh',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #F7F61B, #168820)',
        padding: 3,
        "@media (max-width: 600px)": {
            fontSize: '1.5rem',
            padding: 1
        },
    },
    myQuestion: {
        minWidth: '30vw',
        minHeight: '100vh',
        display: 'flex',
        position: 'left',
        flexDirection: 'column',
        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(66,181,129,1) 100%)"
    },
    myTitle: {
        fontSize: '1.8rem',
        opacity: '0.8',
        fontFamily: 'Varela Round',
        color: 'black',
        marginLeft: 5,
        padding: 1,
        "@media (max-width: 600px)": {
            marginLeft: 0,
            textAlign: 'center',
            fontSize: '1.5rem',
        },
    },

    myLabels: {
        fontSize: '1.5rem',
        opacity: '0.8',
        marginLeft: 5,
        fontFamily: 'Varela Round',
        color: 'black',
        padding: 1,
        "@media (max-width: 600px)": {
            marginLeft: 0,
            fontSize: '1.2rem',
        },
    },
    myTimeText: {
        fontSize: '1.2rem',
        fontFamily: 'Varela Round',
        color: 'black',
        "@media (max-width: 600px)": {
            fontSize: '1rem'
        },
    },
    myImg: {
        display: 'flex',
        padding: 10,
        "@media (max-width: 600px)": {
            padding: 2,
        },
    },
    myText: {
        fontSize: '1.2rem',
        paddingTop: 0,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10,
        fontFamily: 'Varela Round',
        color: 'black',
        "@media (max-width: 600px)": {
            marginLeft: 0,
            fontSize: '1rem',
            paddingTop: 0,
            paddingLeft: 2,
            paddingBottom: 0,
            paddingRight: 2,
        },
    },
    myIcon: {
        width: '5vw',
        minHeight: '5vh',
    }
}
export default function LIFECYCLE_OF_A_FROG() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/main/explore/')
    };
    return (
        <Grid sx={classes.container} >
            <Card sx={classes.myCard}>
                <Card sx={classes.myQuestion}>
                    <IconButton sx={classes.myIcon} onClick={handleBack}>
                        <ArrowBackIcon sx={{ fontSize: 50 }} />
                    </IconButton>
                    <Typography sx={classes.myTitle}>A. <u>LIFECYLE OF A FROG</u></Typography>
                    <Typography sx={classes.myText}>Frogs of the genus Rana are distributed across all the world's continents, except where the climate is either too dry or too cold. Both the smaller species, such as R. pipiens (the grass frog or leopard frog), and the larger species, such as R. catesbeiana (the bullfrog), are commonly dissected. The position of this last species in the classification of vertebrates may be shown as follows:</Typography>

                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><Typography sx={classes.myTimeText}>Phylum Chordata (animals with a notochord)</Typography></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><Typography sx={classes.myTimeText}>Subphylum Vertebrata (animals with a backbone)</Typography></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><Typography sx={classes.myTimeText}>Class Amphibia (amphibians)</Typography></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><Typography sx={classes.myTimeText}>Order Anura (frogs and toads)</Typography></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><Typography sx={classes.myTimeText}>Family Ranidae</Typography></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent><Typography sx={classes.myTimeText}>Genus Rana</Typography></TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                            </TimelineSeparator>
                            <TimelineContent><Typography sx={classes.myTimeText}>Species Rana catesbeiana</Typography></TimelineContent>
                        </TimelineItem>
                    </Timeline>
                    <Typography sx={classes.myText}>Frogs are amphibians, animals that spend part of their lives under water and the remainder on land. They have long, powerful jumping legs and a very short backbone. Most frogs have teeth (in the upper jaws only) but toads do not have any teeth. Like all amphibians, frogs spend their lives near water because they must return to the water to lay their eggs. Frog eggs are laid in the water. When they hatch into tadpoles, they breathe with gills and swim using a tail. As they mature, they lose their tail, and they develop lungs for breathing air. In harsh climates, frogs bury themselves in sand and mud and hibernate (sleep very deeply) through the cold winter.</Typography>
                    <Grid sx={classes.myImg} >
                        <img src={frogCycle} alt='frogCycle' width='100%' />
                    </Grid>
                    <ul>
                        <li><Typography sx={classes.myText}>Egg - Tiny frog eggs are laid in masses in the water by a female frog. The eggs hatch into tadpoles. </Typography></li>
                        <li><Typography sx={classes.myText}>Tadpole - (also called the polliwog) this stage hatches from the egg. The tadpole spends its time swimming in the water, eating and growing. Tadpoles breathe using gills and have a tail.</Typography></li>
                        <li><Typography sx={classes.myText}>Tadpole with legs - In this stage the tadpole sprouts legs (and then arms), has a longer body, and has a more distinct head. It still breathes using gills and has a tail.  </Typography></li>
                        <li><Typography sx={classes.myText}>Froglet - In this stage, the almost mature frog breathes with lungs and still has some of its tail. </Typography></li>
                        <li><Typography sx={classes.myText}>Adult frog - The adult frog breathes with lungs and has no tail (it has been absorbed by the body).</Typography></li>
                    </ul>
                </Card>
            </Card>
        </Grid >
    )
}

