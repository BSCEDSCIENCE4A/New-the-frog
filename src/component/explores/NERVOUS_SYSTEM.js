import React from 'react'
import {
    Grid,
    Typography,
    Card,
    IconButton
} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
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


export default function NERVOUS_SYSTEM() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/main/explore/')
    };
    return (
        <PerfectScrollbar>
        <Grid sx={classes.container} >
            <Card sx={classes.myCard}><b></b>
                <Card sx={classes.myQuestion}>
                    <IconButton sx={classes.myIcon} onClick={handleBack}>
                        <ArrowBackIcon sx={{ fontSize: 50 }} />
                    </IconButton>
                    <Typography sx={classes.myTitle}>M. <u>THE FROG’S NERVOUS SYSTEM</u></Typography>
                    <Typography sx={classes.myLabels}>1. The Nervous System and Sense Organs</Typography>
                    <Typography sx={classes.myText}>
                        The frog has a highly developed nervous system.
                        It consists of a <u>brain, a spinal cord, and nerves</u>.
                        The important parts of the frog brain correspond to comparable parts in the human brain.
                        The <u>medulla</u> regulates automatic functions such as digestion and respiration.
                        Body posture and muscular co-ordination are controlled by the <u>cerebellum</u>. The cerebrum is very small in the frog.
                        By comparison the human cerebrum is very large. In man the cerebrum is involved in many important life processes.
                        Only 10 cranial nerves originate in the frog's brain.
                        Man has 12. Similarly, the frog has only 10 pairs of spinal nerves.
                        Man has 30 pairs. Two simple holes make up the <u>nostrils</u> for the frog.
                        There are complex valves but no long nasal passages as there are in man.
                        The frog's sense of smell is registered by <u>olfactory lobes</u>. These make up the forward portion of the brain.
                        The eye is crude. Its fixed lens cannot change its focus. Poorly developed eyelids do not move.
                        To close its eye, the frog draws the organ into its <u>socket</u> .
                        A third eyelid, or <u>nictitating membrane</u>, may be drawn over the pulled-in eyeball.
                        There is no external ear. Both eardrums, and tympanic membranes, are exposed.
                        There is only one bone in the frog's middle ear. The human middle ear contains three bones (ossicles).
                        As in man, semicircular canals help to maintain body balance.
                    </Typography>
                </Card>
            </Card>
        </Grid >
        </PerfectScrollbar>
    )
}

