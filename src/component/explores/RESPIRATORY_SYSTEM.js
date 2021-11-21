import React from 'react'
import {
    Grid,
    Typography,
    Card,
    IconButton
} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const classes = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100vw',
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
        padding: 3,
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
        fontWeight: 'bold',
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


export default function RESPIRATORY_SYSTEM() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/main/explore/')
    };
    return (
        <Grid sx={classes.container} >
            <Card sx={classes.myCard}><b></b>
                <Card sx={classes.myQuestion}>
                    <IconButton sx={classes.myIcon} onClick={handleBack}>
                        <ArrowBackIcon sx={{ fontSize: 50 }} />
                    </IconButton>
                    <Typography sx={classes.myTitle}>J. <u>THE FROG’S RESPIRATORY SYSTEM</u></Typography>
                    <Typography sx={classes.myLabels}>1. Respiratory Organs</Typography>
                    <Typography sx={classes.myText}><b><i>a.&#41; glottis -</i></b>lengthwise slit in the floor of pharynx; opening into larynx. </Typography>
                    <Typography sx={classes.myText}><b><i>b.&#41; larynx or voice box -</i></b> spherical structure with cartilaginous walls immediately ventral to glottis. </Typography>
                    <Typography sx={classes.myText}><b><i>c.&#41; bronchi -</i></b> two; short; each bronchus connects to larynx. two; ovoid; thin-walled sacs which are highly elastic. </Typography>
                    <Typography sx={classes.myText}><b><i>d.&#41; lungs -</i></b> two; ovoid; thin-walled sacs which are highly elastic. </Typography>
                </Card>
            </Card>
        </Grid >
    )
}

